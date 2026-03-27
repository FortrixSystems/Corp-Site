import { NextRequest } from 'next/server';

type Entry = { windowStart: number; count: number };

const store = new Map<string, Entry>();

const MAX_KEYS = 8000;

function pruneIfNeeded() {
  if (store.size <= MAX_KEYS) return;
  const keys = [...store.keys()];
  for (let i = 0; i < keys.length / 2; i++) {
    store.delete(keys[i]);
  }
}

/**
 * Best-effort client IP for rate limiting. Not a substitute for WAF/API Gateway limits.
 *
 * **AWS (CloudFront → API/Lambda):** CloudFront forwards the viewer address in
 * `X-Forwarded-For`. The **leftmost** comma-separated value is usually the end-user
 * when each hop appends to the right (see AWS CloudFront custom-origin docs).
 * If the header is a single IP, that is typically the viewer.
 *
 * **You must verify in production** (e.g. one CloudWatch log of this value vs your
 * real public IP): if every user shares one IP, you are likely seeing an edge/proxy
 * address and this limiter will behave incorrectly — fix headers at the CDN or rely
 * on WAF throttling instead.
 *
 * **Spoofing:** Untrusted clients can send fake `X-Forwarded-For` values. Rate
 * limiting here is defense-in-depth only; WAF uses the real connection metadata.
 */
export function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return normalizeIp(first);
  }
  const real = request.headers.get('x-real-ip');
  if (real?.trim()) return normalizeIp(real.trim());
  return 'unknown';
}

/** Strip IPv6 brackets some proxies include. */
function normalizeIp(ip: string): string {
  const t = ip.trim();
  if (t.startsWith('[') && t.includes(']')) {
    return t.slice(1, t.indexOf(']'));
  }
  return t;
}

export interface RateLimitOptions {
  keyPrefix: string;
  max: number;
  windowMs: number;
}

/**
 * Fixed-window limiter (in-memory). On serverless, each warm instance has its own
 * store — use API Gateway throttling / WAF for global enforcement (see amplify.yml).
 */
export function rateLimitAllow(
  request: NextRequest,
  options: RateLimitOptions
): { allowed: true } | { allowed: false; retryAfterSec: number } {
  const max = parseInt(
    process.env.PUBLIC_FORM_RATE_LIMIT_MAX ||
      process.env.WORK_WITH_US_RATE_LIMIT_MAX ||
      '',
    10
  );
  const windowMs = parseInt(
    process.env.PUBLIC_FORM_RATE_LIMIT_WINDOW_MS ||
      process.env.WORK_WITH_US_RATE_LIMIT_WINDOW_MS ||
      '',
    10
  );
  const limit = Number.isFinite(max) && max > 0 ? max : options.max;
  const windowLen =
    Number.isFinite(windowMs) && windowMs > 0 ? windowMs : options.windowMs;

  const ip = getClientIp(request);
  const key = `${options.keyPrefix}:${ip}`;
  const now = Date.now();
  let e = store.get(key);

  if (!e || now - e.windowStart >= windowLen) {
    store.set(key, { windowStart: now, count: 1 });
    pruneIfNeeded();
    return { allowed: true };
  }

  if (e.count >= limit) {
    const retryAfterSec = Math.ceil((e.windowStart + windowLen - now) / 1000);
    return {
      allowed: false,
      retryAfterSec: Math.max(1, retryAfterSec),
    };
  }

  e.count += 1;
  return { allowed: true };
}
