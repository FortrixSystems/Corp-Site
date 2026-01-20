import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Beacon - Fraud Intelligence & Risk Patterns',
  description: 'Fortrix Beacon identifies anomalies, risk patterns, and fraud indicators across systems. Detects unusual configurations, surfaces risk scores, and helps jurisdictions respond with evidence-based prioritization.',
  keywords: 'fraud intelligence, risk patterns, anomaly detection, fraud indicators, risk scoring, evidence-based prioritization, Fortrix Beacon, lottery fraud detection, risk signals',
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
          subtitle="Detects anomalies, patterns, and risk signals across systems."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Beacon delivers real-time signals using rule-based logic, risk scoring, and alert automation. It gives oversight teams a clear view of emerging risks and operational exceptions.
        </p>
      </Section>

      {/* Purpose Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix Beacon delivers real-time signals using rule-based logic, risk scoring, and alert automation. It gives oversight teams a clear view of emerging risks and operational exceptions.
          </p>
        </div>
      </Section>

      {/* Anomaly Detection Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Anomaly Detection</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Detects unusual configurations or transaction flows that may indicate elevated risk.
          </p>
        </div>
      </Section>

      {/* Evidence-Based Response Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Evidence-Based Response</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Helps jurisdictions respond with evidence-based prioritization and review.
          </p>
        </div>
      </Section>

      {/* Integration Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Integrates with Fortrix Ledger to provide context and a complete event history.
          </p>
        </div>
      </Section>
      </>
    
  );
}

