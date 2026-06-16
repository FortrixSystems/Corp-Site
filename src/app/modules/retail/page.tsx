import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';
import { LEGAL_ENTITY_NAME } from '@/lib/site-constants';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Retail — Terminal Health & Reconciliation',
  description:
    'Fortrix Retail monitors terminal-estate health, daily reconciliation, and SLA oversight for regulated lottery retail networks.',
  path: '/modules/retail',
  keywords:
    'retail terminal health, retail reconciliation, terminal estate monitoring, retail SLA, Fortrix Retail',
});

const retailProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Retail',
  description:
    'Retail terminal-estate health monitoring and daily reconciliation across initiation, collection, matching, exception handling, and settlement.',
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

export default function Retail() {
  return (
    <>
      <StructuredData data={retailProductData} />
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="retail" variant="dark" size={56} className="rounded-none" />
          <PageTitle
            title="Fortrix Retail"
            subtitle="Retail terminal-estate health monitoring and daily reconciliation."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Retail monitors the health of retail terminal estates and reconciles daily retail activity across the network. It supports per-terminal and network-level SLA oversight, transaction balancing, and structured exception handling so operators and oversight teams can see where retail activity aligns — and where it does not.
        </p>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Terminal Estate Health
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix Retail provides visibility into retail terminal performance across the estate, helping teams identify terminals that fall outside expected operating patterns and prioritize follow-up based on operational impact.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Daily Reconciliation
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-6">
            Retail reconciliation runs through five structured stages each day:
          </p>
          <div className="space-y-3">
            {[
              'Initiation — opening balances and session start are recorded and validated.',
              'Collection — terminal and network activity is gathered for the reconciliation period.',
              'Matching — wagers, voids, pays, and settlements are matched across sources.',
              'Exception Handling — discrepancies are surfaced, categorized, and routed for review.',
              'Settlement — reconciled totals are confirmed and prepared for downstream reporting.',
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            SLA &amp; Transaction Balancing
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Per-terminal and network-level SLA monitoring supports operational oversight across the retail network. Transaction balancing helps teams confirm that retail activity reconciles across terminals, sessions, and reporting periods with clear evidence when variances arise.
          </p>
        </div>
      </Section>
    </>
  );
}
