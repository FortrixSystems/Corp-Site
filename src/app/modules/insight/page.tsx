import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Insight - Audit and Reporting Layer',
  description: 'Audit, review, and reporting layer for oversight teams. Helps regulators and operators answer "what happened?" quickly using structured data, searchable records, and export-ready outputs.',
  alternates: {
    canonical: '/modules/insight',
  },
};

const insightProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Insight',
  description: 'Audit, review, and reporting layer for oversight teams with searchable evidence views and export-ready outputs.',
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

export default function Insight() {
  return (
    <>
      <StructuredData data={insightProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Insight"
          subtitle="Audit, review, and reporting layer for oversight teams."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Insight helps regulators and operators answer &quot;what happened?&quot; quickly using structured data, searchable records, and export-ready outputs. It reduces the time spent gathering artifacts, improves consistency in reviews, and supports defensible oversight across complex environments.
        </p>
      </Section>

      {/* Overview Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Overview</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6 leading-relaxed">
            Fortrix Insight helps regulators and operators answer &quot;what happened?&quot; quickly using structured data, searchable records, and export-ready outputs.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            It reduces the time spent gathering artifacts, improves consistency in reviews, and supports defensible oversight across complex environments.
          </p>
        </div>
      </Section>

      {/* Key Features Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Key Features</h2>
          <div className="space-y-8 sm:space-10">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Searchable Evidence Views</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Find relevant events and activity quickly across systems and timeframes.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Filters by system, user, event type, and timeframe</li>
                <li>Correlated timelines and linked evidence</li>
                <li>Saved views for common review patterns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Evidence Packets and Exports</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Package review artifacts into auditor-friendly outputs.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Export-ready formats for submissions</li>
                <li>Structured evidence packets by incident or topic</li>
                <li>Repeatable reporting templates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Exception and Review Workflows</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Support consistent oversight.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Review queues for flagged activity</li>
                <li>Notes, decisions, and outcomes captured</li>
                <li>Role-based access and approvals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Jurisdiction Controls and Governance</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Align reporting and review practices to your oversight model.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Configurable/Custom rules by jurisdiction</li>
                <li>Segregation of duties support</li>
                <li>Audit trails for reviewer actions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Benefits</h2>
        <div className="max-w-4xl space-y-6 sm:space-8">
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Faster audits and reviews</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Reduce manual evidence gathering and accelerate reporting time.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">More consistent oversight</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Standardize how reviews are conducted across teams and environments.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Stronger defensibility</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Create clear, traceable documentation for decisions and outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Insight uses data already securely integrated from CGS and vendor systems. It supports audits and reviews by making activity searchable and export-ready.
          </p>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Use Cases</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Regulatory review preparation</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Assemble consistent evidence packets for audits, reviews, and inquiries.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Operational incident review</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Quickly reconstruct timelines, identify impacted systems, and document outcomes.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Ongoing oversight reporting</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Produce recurring reports that support governance, controls, and compliance.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
