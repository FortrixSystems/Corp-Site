import { ReactNode } from 'react';

interface OrganizationData {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  description: string;
  contactPoint?: {
    '@type': string;
    contactType: string;
    email?: string;
    telephone?: string;
  };
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
  name: 'Fortrix Systems Inc.',
  url: 'https://fortrixsystems.com',
  description: 'Fortrix Systems Inc. provides lotteries and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'info@fortrixsystems.com',
  },
};

