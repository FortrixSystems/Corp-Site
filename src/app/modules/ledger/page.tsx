import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Ledger - Evidence Engine',
  description: 'The evidence engine that reconstructs and documents every critical event. Immutable event recording, canonical source-of-truth timelines, and export-ready audit documentation.',
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
        <PageTitle 
          title="Fortrix Ledger"
          subtitle="Immutable evidence engine for system-of-record integrity."
          dark={true}
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Every critical event is captured with full attribution, timestamping, and reconciliation support — creating a verifiable audit trail for compliance, review, or investigation.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-white">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Immutable Recording</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Immutable event recording ensures audit logs cannot be altered or deleted.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Canonical Timelines</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Canonical source-of-truth timelines provide complete event reconstruction.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Segregation of Duties</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Segregation-of-duties enforcement maintains operational integrity and prevents conflicts.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Audit Export</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Export-ready for auditors with structured formats supporting regulatory submissions.
            </p>
          </Card>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-8 sm:mb-10 leading-relaxed">
            Clear pairing with Fortrix Clarity UI for searchable audit log viewing and investigation.
          </p>
          <div className="bg-white rounded-lg border border-fortrix-grey-300 p-8">
            <div className="aspect-video bg-fortrix-grey-100 rounded-lg flex items-center justify-center">
              <p className="text-fortrix-navy/50 font-regular">Diagram: activity → validation → ledger → audit output</p>
            </div>
          </div>
        </div>
      </Section>
      </>
    
  );
}

