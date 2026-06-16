import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';
import { LEGAL_ENTITY_NAME } from '@/lib/site-constants';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Beacon — Fraud Intelligence & Risk Patterns',
  description:
    'Fortrix Beacon detects anomalies, risk patterns, and compliance signals across lottery and gaming systems with configurable monitoring and evidence-based prioritization.',
  path: '/modules/beacon',
  keywords:
    'fraud intelligence, risk patterns, anomaly detection, AML monitoring, Fortrix Beacon, lottery and gaming fraud',
});

const beaconProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Beacon',
  description:
    'Fraud intelligence, financial-compliance monitoring, and risk pattern detection across lottery and gaming systems.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  brand: {
    '@type': 'Brand',
    name: LEGAL_ENTITY_NAME,
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
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="beacon" variant="dark" size={56} className="rounded-none" />
          <PageTitle
            title="Fortrix Beacon"
            subtitle="Detects anomalies, patterns, and risk signals across systems."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Beacon delivers real-time signals using rule-based logic, risk scoring, and alert automation. It gives oversight teams a clear view of emerging risks, financial-compliance indicators, and operational exceptions across product lines.
        </p>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Anomaly Detection</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Detects unusual configurations or transaction flows that may indicate elevated risk across lottery and gaming operations.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Financial Compliance &amp; AML Monitoring
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-6">
            Beacon supports jurisdiction-configurable financial-compliance monitoring designed for regulated environments. Built capabilities include structured monitoring workflows, automated filing preparation for frameworks such as FINTRAC and PCMLTFA where applicable, structuring detection, and retailer risk profiling — framed as oversight tooling, not claims of live production filing.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            This gives operators and regulators a consistent layer for surfacing financial-compliance signals alongside fraud and operational risk, with evidence suitable for review and prioritization.
          </p>
        </div>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Evidence-Based Response</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Helps jurisdictions respond with evidence-based prioritization and review, connecting risk signals to the records teams need to investigate and resolve exceptions.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Integration</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Integrates with Fortrix Ledger to provide context and a complete event history for fraud, compliance, and operational risk reviews.
          </p>
        </div>
      </Section>
    </>
  );
}
