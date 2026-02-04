import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Ledger - Evidence Engine',
  description: 'The evidence engine that reconstructs and documents every critical event. Immutable event recording, canonical source-of-truth timelines, and export-ready audit documentation.',
  keywords: 'evidence engine, system-of-record integrity, immutable records, audit trail, canonical timelines, tamper-evident, Fortrix Ledger, audit documentation, event reconstruction',
  alternates: {
    canonical: '/modules/ledger',
  },
};

const ledgerProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Ledger',
  description: 'Evidence engine module that reconstructs and documents every critical event with immutable event recording and canonical source-of-truth timelines.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  brand: {
    '@type': 'Brand',
    name: 'Fortrix Systems Inc.',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Ledger() {
  return (
    
      <>
      <StructuredData data={ledgerProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="ledger" variant="dark" size={56} className="rounded-none" />
          <PageTitle 
            title="Fortrix Ledger"
            subtitle="Immutable evidence engine for system-of-record integrity."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Every critical event is captured with full attribution, timestamping, and reconciliation context, creating a verifiable audit trail for compliance, review, or inquiry.
        </p>
      </Section>

      {/* Purpose Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Every critical event is captured with full attribution, timestamping, and reconciliation context, creating a verifiable audit trail for compliance, review, or inquiry.
          </p>
        </div>
      </Section>

      {/* Canonical Timelines Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Canonical Timelines</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Canonical timelines provide complete event reconstruction.
          </p>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Pairs with Fortrix Insight for searchable audit log viewing and review.
          </p>
        </div>
      </Section>

      </>
    
  );
}

