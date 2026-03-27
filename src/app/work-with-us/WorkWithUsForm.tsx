'use client';

import { useState, useRef, FormEvent, DragEvent, ChangeEvent } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import {
  RESUME_MAX_BYTES,
  detectResumeKindFromBytes,
  getResumeExtension,
} from '@/lib/resume-validation';

async function validateResumeFile(file: File): Promise<boolean> {
  if (file.size > RESUME_MAX_BYTES || file.size === 0) return false;
  const ext = getResumeExtension(file.name);
  if (!ext) return false;
  const slice = file.slice(0, Math.min(512, file.size));
  const buf = new Uint8Array(await slice.arrayBuffer());
  const kind = detectResumeKindFromBytes(buf);
  return kind === ext;
}

export default function WorkWithUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [about, setAbout] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const inputRef = useRef<HTMLInputElement>(null);

  const setFileFromList = async (file: File | undefined) => {
    setFileError(null);
    if (!file) {
      setResume(null);
      return;
    }
    const ok = await validateResumeFile(file);
    if (!ok) {
      setResume(null);
      setFileError(
        'Please upload a real PDF or Word document (.doc, .docx), under 5 MB.'
      );
      return;
    }
    setResume(file);
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    void setFileFromList(e.target.files?.[0]);
  };

  const onDragOver = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const onDragLeave = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    void setFileFromList(file);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!resume) {
      setFileError('Please attach your resume.');
      return;
    }
    if (honeypot.trim() !== '') {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('linkedin', linkedin);
    formData.append('about', about);
    formData.append('resume', resume);
    formData.append('_gotcha', honeypot);

    try {
      const response = await fetch('/api/work-with-us', {
        method: 'POST',
        body: formData,
      });

      const rawText = await response.text();
      let data: Record<string, unknown> = {};
      try {
        data = rawText ? (JSON.parse(rawText) as Record<string, unknown>) : {};
      } catch {
        data = {};
      }

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you. We have received your application and will be in touch if there is a fit.',
        });
        setName('');
        setEmail('');
        setLinkedin('');
        setAbout('');
        setResume(null);
        if (inputRef.current) inputRef.current.value = '';
        return;
      }

      if (response.status === 429) {
        setSubmitStatus({
          type: 'error',
          message:
            'Too many submissions. Please wait a few minutes and try again.',
        });
        return;
      }

      const errMsg =
        (data && typeof data.error === 'string' && data.error) ||
        'Something went wrong. Please try again.';
      setSubmitStatus({ type: 'error', message: errMsg });
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    'w-full px-4 py-3 border border-fortrix-grey-300 rounded-md text-fortrix-grey-900 placeholder:text-fortrix-grey-500 bg-white focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent';

  if (submitStatus.type === 'success') {
    return (
      <Card>
        <div className="p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {submitStatus.type === 'error' && (
          <div className="p-4 rounded-md bg-red-50 text-red-800 border border-red-200">
            <p className="text-sm font-medium">{submitStatus.message}</p>
          </div>
        )}

        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
        />

        <div>
          <label
            htmlFor="wwu-name"
            className="block text-sm font-semibold text-fortrix-grey-900 mb-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="wwu-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isSubmitting}
            className={fieldClass}
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="wwu-email"
            className="block text-sm font-semibold text-fortrix-grey-900 mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="wwu-email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="wwu-linkedin"
            className="block text-sm font-semibold text-fortrix-grey-900 mb-2"
          >
            LinkedIn URL
          </label>
          <input
            type="url"
            id="wwu-linkedin"
            name="linkedin"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            disabled={isSubmitting}
            className={fieldClass}
            placeholder="https://www.linkedin.com/in/..."
          />
        </div>

        <div>
          <label
            htmlFor="wwu-about"
            className="block text-sm font-semibold text-fortrix-grey-900 mb-2"
          >
            Tell us about yourself
          </label>
          <textarea
            id="wwu-about"
            name="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={5}
            disabled={isSubmitting}
            className={`${fieldClass} resize-y min-h-[120px]`}
            placeholder="Background, interests, or what you are looking for next"
          />
        </div>

        <div>
          <label
            htmlFor="wwu-resume"
            className="block text-sm font-semibold text-fortrix-grey-900 mb-2"
          >
            Resume <span className="text-red-500">*</span>
          </label>
          <span className="sr-only" id="resume-hint">
            PDF or Word, maximum 5 MB
          </span>
          <input
            ref={inputRef}
            id="wwu-resume"
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            aria-describedby="resume-hint"
            onChange={onFileChange}
            disabled={isSubmitting}
            className="sr-only"
          />
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                inputRef.current?.click();
              }
            }}
            onClick={() => inputRef.current?.click()}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            className={`cursor-pointer rounded-md border-2 border-dashed px-4 py-10 text-center transition-colors ${
              dragActive
                ? 'border-fortrix-teal bg-fortrix-grey-100'
                : 'border-fortrix-grey-300 hover:border-fortrix-teal/60 bg-fortrix-grey-100'
            }`}
          >
            <p className="text-fortrix-grey-700 font-regular mb-1">
              {resume ? resume.name : 'Drop your file here, or click to browse'}
            </p>
            <p className="text-sm text-fortrix-grey-500">
              PDF, .doc, or .docx — max 5 MB
            </p>
          </div>
          {fileError && (
            <p className="mt-2 text-sm text-fortrix-crimson" role="alert">
              {fileError}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Submit application'}
          </Button>
        </div>
      </form>
    </Card>
  );
}
