import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Beacon - Fraud Intelligence & Risk Patterns',
  description: 'Fortrix Beacon identifies anomalies, risk patterns, and fraud indicators across systems. Detects unusual configurations, surfaces risk scores, and helps jurisdictions respond with evidence-based prioritization.',
  alternates: {
    canonical: '/modules/beacon',
  },
};

const beaconProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Beacon',
  description: 'Fraud intelligence and risk pattern detection module that identifies anomalies and fraud indicators across lottery systems.',
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

export default function Beacon() {
  return (
    
      <>
      <StructuredData data={beaconProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Beacon"
          subtitle="Identifies anomalies, risk patterns, and fraud indicators across systems."
          dark={true}
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix Beacon identifies anomalies, risk patterns, and fraud indicators across systems, providing early warning and evidence-based prioritization for jurisdictions.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-fortrix-grey-900">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card hover>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Anomaly Detection</h3>
            <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
              Detects unusual configurations or transaction flows that may indicate risk or fraud.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Risk Scoring</h3>
            <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
              Surfaces risk scores using controlled logic to prioritize attention and response.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Alert Classification</h3>
            <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
              Highlights amber (attention) vs crimson (critical) conditions for clear escalation.
            </p>
          </Card>
          <Card hover>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Evidence-Based Response</h3>
            <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
              Helps jurisdictions respond with evidence-based prioritization and investigation.
            </p>
          </Card>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 leading-relaxed">
            Integrates with Fortrix Ledger for context and complete event reconstruction.
          </p>
          <div className="border border-fortrix-grey-300 p-6 sm:p-8">
            <div className="aspect-video flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                  <div className="w-2 h-2 border border-fortrix-amber/60"></div>
                  <div className="flex-1 h-px bg-fortrix-teal/50"></div>
                  <div className="w-2 h-2 border border-fortrix-crimson/60"></div>
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      </>
    
  );
}

