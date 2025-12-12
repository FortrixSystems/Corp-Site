import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';
import ProtectedContent from '@/components/ProtectedContent';

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
    <ProtectedContent>
      <>
      <StructuredData data={ledgerProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Ledger"
          subtitle="The evidence engine that reconstructs and documents every critical event."
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-lg text-fortrix-grey-700 font-regular">
            Fortrix Ledger serves as the evidence engine that reconstructs and documents every critical event, providing immutable records and canonical source-of-truth timelines.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl font-heading font-semibold mb-12 text-fortrix-grey-900 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Immutable Recording</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Immutable event recording ensures audit logs cannot be altered or deleted.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Canonical Timelines</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Canonical source-of-truth timelines provide complete event reconstruction.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Segregation of Duties</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Segregation-of-duties enforcement maintains operational integrity and prevents conflicts.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Audit Export</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Export-ready for auditors with structured formats supporting regulatory submissions.
            </p>
          </Card>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-lg text-fortrix-grey-700 font-regular mb-8">
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
    </ProtectedContent>
  );
}

