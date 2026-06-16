import type { Metadata } from 'next';
import {
  DEFAULT_OG_IMAGE,
  SITE_DISPLAY_NAME,
  SITE_URL,
} from '@/lib/site-constants';

export { SITE_URL };

export const DEFAULT_DESCRIPTION =
  'Fortrix Systems gives lottery and gaming operators and regulators an independent control and oversight platform for audit readiness, traceability, and operational integrity.';

export const DEFAULT_KEYWORDS =
  'lottery oversight, gaming oversight, regulated gaming, audit readiness, internal control system, independent oversight, traceability, reconciliation, operational integrity';

export interface PageSeoInput {
  /** Page title segment (layout adds " | Fortrix Systems"). Do not include the suffix here. */
  title: string;
  description: string;
  path: `/${string}`;
  keywords?: string;
}

/** Trim meta description to ~160 characters at a word boundary. */
export function metaDescription(text: string, max = 160): string {
  const normalized = text.trim().replace(/\s+/g, ' ');
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const trimmed = lastSpace > 100 ? slice.slice(0, lastSpace) : slice;
  return `${trimmed.trimEnd()}…`;
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

const defaultOgImages: NonNullable<Metadata['openGraph']>['images'] = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: `${SITE_DISPLAY_NAME} — Engineered for truth. Built for oversight.`,
  },
];

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: PageSeoInput): Metadata {
  const desc = metaDescription(description);
  const fullTitle = `${title} | ${SITE_DISPLAY_NAME}`;

  return {
    title,
    description: desc,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: SITE_DISPLAY_NAME,
      locale: 'en_US',
      type: 'website',
      images: defaultOgImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
