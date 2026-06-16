import { ReactNode } from 'react';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  HQ_ADDRESS,
  LEGAL_ENTITY_NAME,
  LINKEDIN_COMPANY_URL,
  SITE_DISPLAY_NAME,
  SITE_URL,
  US_ADDRESS,
} from '@/lib/site-constants';

interface OrganizationData {
  '@context': string;
  '@type': string;
  name: string;
  legalName?: string;
  url: string;
  logo?: string;
  description: string;
  contactPoint?: {
    '@type': string;
    contactType: string;
    email?: string;
    telephone?: string;
    areaServed?: string;
  };
  address?: Array<{
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  }>;
  sameAs?: string[];
}

interface ProductData {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  brand: {
    '@type': string;
    name: string;
  };
  category?: string;
  url?: string;
}

interface StructuredDataProps {
  data: OrganizationData | ProductData | object;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationData: OrganizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_DISPLAY_NAME,
  legalName: LEGAL_ENTITY_NAME,
  url: SITE_URL,
  description:
    'Fortrix Systems provides lottery and gaming operators and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data.',
  sameAs: [LINKEDIN_COMPANY_URL],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    areaServed: 'CA, US',
  },
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: HQ_ADDRESS.lines[0],
      addressLocality: 'Maple Ridge',
      addressRegion: 'BC',
      postalCode: 'V2X 3J5',
      addressCountry: 'CA',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: US_ADDRESS.lines[0],
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19801',
      addressCountry: 'US',
    },
  ],
};
