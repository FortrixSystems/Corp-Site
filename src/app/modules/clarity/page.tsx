import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';
import ProtectedContent from '@/components/ProtectedContent';

export const metadata: Metadata = {
  title: 'Fortrix Clarity - Audit Log Search & Transparency',
  description: 'Searchable audit log viewer for oversight and investigation. Fast log search, correlated event pathways, export options for regulatory submissions, and compliance workflow visualization.',
  alternates: {
    canonical: '/modules/clarity',
  },
};

const clarityProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Clarity',
  description: 'Searchable audit log viewer for oversight and investigation with fast log search, event correlation, and export options for regulatory submissions.',
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

export default function Clarity() {
  return (
    <ProtectedContent>
      <>
      <StructuredData data={clarityProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Clarity"
          subtitle="Searchable audit log viewer for oversight and investigation."
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-lg text-fortrix-grey-700 font-regular">
            Fortrix Clarity provides a searchable audit log viewer for oversight and investigation, enabling fast log search, filtering, and export for regulatory submissions.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl font-heading font-semibold mb-12 text-fortrix-grey-900 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Fast Search</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Fast log search + filtering enables efficient investigation and oversight workflows.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Event Correlation</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Correlated event pathways reveal relationships and patterns across system activity.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Export Options</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Export options for regulatory submissions support compliance and audit requirements.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Compliance Workflows</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Visualization aligned to compliance workflows enables efficient regulatory oversight.
            </p>
          </Card>
        </div>
      </Section>

      {/* Diagram Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Process Flow</h2>
          <div className="bg-white rounded-lg border border-fortrix-grey-300 p-8">
            <div className="aspect-video bg-fortrix-grey-100 rounded-lg flex items-center justify-center">
              <p className="text-fortrix-navy/50 font-regular">Diagram: Ledger logs → search/filter → export</p>
            </div>
          </div>
        </div>
      </Section>
      </>
    </ProtectedContent>
  );
}

