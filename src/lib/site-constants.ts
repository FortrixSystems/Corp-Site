/** Display name used in headings, nav, and customer-facing copy. */
export const SITE_DISPLAY_NAME = 'Fortrix Systems';

/** Canonical production site URL (always use www). */
export const SITE_URL = 'https://www.fortrixsystems.com';

/**
 * Default Open Graph / social share image at `public/og-default.png`.
 * Spec: 1200×630 px PNG or JPG — horizontal logo on brand navy with tagline.
 */
export const DEFAULT_OG_IMAGE = '/og-default.png';

/** Legal entity name for Privacy, Terms, copyright, and schema legalName. */
export const LEGAL_ENTITY_NAME = 'Fortrix Systems';

export const CONTACT_EMAIL = 'hello@fortrixsystems.com';
export const CONTACT_PHONE = '+1 604-982-9943';
export const CONTACT_PHONE_TEL = 'tel:+16049829943';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/** Public company page (not the admin dashboard URL). */
export const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/113050955/';

export const HQ_ADDRESS = {
  label: 'Canada — Head Office',
  lines: ['22420 Dewdney Trunk Rd, Ste 300', 'Maple Ridge, BC V2X 3J5'],
} as const;

export const US_ADDRESS = {
  label: 'United States',
  lines: [
    '1201 North Market Street, Suite 111-O43',
    'Wilmington, DE 19801',
  ],
} as const;

export const PRIVACY_EFFECTIVE_DATE = 'June 16, 2026';

export const CONTACT_TOPICS = [
  'Request a demo',
  'General inquiry',
  'Partnership / integration',
  'Careers / recruiting',
  'Other',
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
