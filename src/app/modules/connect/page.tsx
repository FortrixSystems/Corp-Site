import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Connect - Integration Layer',
  description: 'Integration and normalization layer across partners and systems. Standardizes data movement, validation, and normalization across provider systems for consistent oversight.',
  keywords: 'API integration, integration layer, data normalization, vendor systems, integration health, data handoffs, Fortrix Connect, normalized schemas, controlled data handoffs',
  alternates: {
    canonical: '/modules/connect',
  },
};

const connectProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Connect',
  description: 'Integration and normalization layer across partners and systems for consistent oversight and cross-system traceability.',
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

export default function Connect() {
  return (
    <>
      <StructuredData data={connectProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="connect" variant="dark" size={56} className="rounded-none" />
          <PageTitle 
            title="Fortrix Connect"
            subtitle="Integration and normalization layer across partners and systems."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Connect standardizes how data is moved, validated, and normalized across provider systems so oversight is consistent. It reduces integration drift, improves cross-system traceability, and supports modular deployments without forcing changes to existing operational workflows.
        </p>
      </Section>

      {/* Overview Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Overview</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6 leading-relaxed">
            Fortrix Connect standardizes how data is moved, validated, and normalized across provider systems so oversight is consistent.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            It reduces integration drift, improves cross-system traceability, and supports modular deployments without forcing changes to existing operational workflows.
          </p>
        </div>
      </Section>

      {/* Key Features Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Key Features</h2>
          <div className="space-y-8 sm:space-10">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Normalized Schemas</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Standardizes payloads into consistent formats for downstream reconciliation and evidence capture.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Canonical event models for common lottery activity</li>
                <li>Validation and field-level controls</li>
                <li>Versioning support for evolving integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Controlled Data Handoffs</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Moves data reliably between systems with clear lineage and predictable behavior.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Routing and transformation rules</li>
                <li>Error handling and retry controls</li>
                <li>Observability for integration health</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Provider-Agnostic Integration Patterns</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Supports multiple providers without bespoke rework for every environment.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Repeatable connector patterns</li>
                <li>Configuration-driven mappings</li>
                <li>Supports phased rollout by module</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Traceability by Design</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-3">
                Creates a clear record of what was received, when, and how it was handled.
              </p>
              <ul className="text-base text-fortrix-grey-700 space-y-1 list-disc list-inside ml-4">
                <li>Message tracking and attribution</li>
                <li>Correlation IDs across systems</li>
                <li>Export-ready integration logs</li>
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
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Faster onboarding across providers</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Reduces rework by standardizing integration patterns and data validation.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Cleaner reconciliation inputs</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Improves downstream verification by ensuring consistent, validated event structures.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Lower operational risk</h3>
            <p className="text-fortrix-grey-300 font-regular text-base sm:text-lg">
              Increases visibility into integration health and reduces silent failures.
            </p>
          </div>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Connect works with any CGS or vendor systems. It normalizes events and feeds them into Ledger for tamper-evident capture, and into Insight for review workflows. It also supports Beacon by scoring signals against consistent, validated inputs.
          </p>
        </div>
      </Section>

      {/* Use Cases Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Use Cases</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Multi-provider environment normalization</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Bring disparate vendor outputs into a consistent event structure for verification and evidence.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Phased module rollout</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Start with a limited scope integration, then expand to additional systems and modules over time.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Integration health and oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Improve visibility into data handoffs, errors, and drift across partner systems.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
