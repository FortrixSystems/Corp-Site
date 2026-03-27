/**
 * Resume file rules shared by client (best-effort) and server (authoritative).
 * Server validates magic bytes so extension/MIME spoofing is rejected.
 */

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;

export type ResumeKind = 'pdf' | 'docx' | 'doc';

const OLE_MAGIC = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1];

/** First bytes of file — works in browser (Uint8Array) and Node (Buffer). */
export function detectResumeKindFromBytes(buf: Uint8Array): ResumeKind | null {
  if (buf.length < 8) return null;

  if (buf.length >= 4) {
    const head = String.fromCharCode(...buf.subarray(0, 4));
    if (head === '%PDF') return 'pdf';
  }

  if (
    buf[0] === 0x50 &&
    buf[1] === 0x4b &&
    buf[2] === 0x03 &&
    buf[3] === 0x04
  ) {
    return 'docx';
  }

  let isOle = true;
  for (let i = 0; i < 8; i++) {
    if (buf[i] !== OLE_MAGIC[i]) {
      isOle = false;
      break;
    }
  }
  if (isOle) return 'doc';

  return null;
}

const EXT_TO_KIND: Record<string, ResumeKind> = {
  pdf: 'pdf',
  docx: 'docx',
  doc: 'doc',
};

export function getResumeExtension(filename: string): string | null {
  const ext = filename.split('.').pop()?.toLowerCase();
  if (!ext || !EXT_TO_KIND[ext]) return null;
  return ext;
}

/** Server-side: extension + declared size must match detected kind. */
export function validateResumeBytes(
  kindFromExtension: string,
  buffer: Uint8Array,
  fileSize: number
): { ok: true; kind: ResumeKind } | { ok: false; error: string } {
  if (fileSize === 0 || fileSize > RESUME_MAX_BYTES) {
    return { ok: false, error: 'Invalid file size.' };
  }
  if (buffer.length !== fileSize) {
    return { ok: false, error: 'Invalid file size.' };
  }
  const expectedKind = EXT_TO_KIND[kindFromExtension];
  if (!expectedKind) {
    return { ok: false, error: 'Invalid file type.' };
  }
  const detected = detectResumeKindFromBytes(buffer);
  if (!detected || detected !== expectedKind) {
    return {
      ok: false,
      error:
        'File content does not match the allowed type. Use a real PDF or Word document.',
    };
  }
  return { ok: true, kind: detected };
}
