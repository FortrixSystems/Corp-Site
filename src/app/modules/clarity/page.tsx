import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Clarity - Audit Log Search & Transparency',
  description: 'Searchable audit log viewer for oversight and investigation. Fast log search, correlated event pathways, export options for regulatory submissions, and compliance workflow visualization.',
  keywords: 'audit log search, transparency, searchable audit logs, log viewing, audit review, Fortrix Clarity, audit log transparency, oversight review',
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
    
      <>
      <StructuredData data={clarityProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Clarity"
          subtitle="Searchable audit log viewer for oversight and investigation."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Clarity provides searchable audit log viewing and review capabilities, making it easy to find relevant events and activity across systems and timeframes.
        </p>
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Clarity offers full-text search, filterable views, and exportable records — giving regulators and auditors direct access to the evidence they need, when they need it.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Benefits</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Fast Search</h3>
              <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
                Fast log search + filtering enables efficient investigation and oversight workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Event Correlation</h3>
              <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
                Correlated event pathways reveal relationships and patterns across system activity.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Export Options</h3>
              <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
                Export options for regulatory submissions support compliance and audit requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Compliance Workflows</h3>
              <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
                Visualization aligned to compliance workflows enables efficient regulatory oversight.
              </p>
            </div>
          </div>
        </div>
      </Section>

      </>
    
  );
}

