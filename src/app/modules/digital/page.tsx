import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';
import { LEGAL_ENTITY_NAME } from '@/lib/site-constants';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Digital — Digital Lottery & iGaming Control',
  description:
    'Fortrix Digital provides independent control for digital lottery and iGaming—configuration governance, reconciliation, and oversight across the digital estate.',
  path: '/modules/digital',
  keywords:
    'digital lottery, iGaming oversight, digital reconciliation, dual-approval workflows, Fortrix Digital, online lottery control',
});

const digitalProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Digital',
  description:
    'Independent control and oversight layer for digital lottery and iGaming operations with dual-approval configuration controls and digital estate reconciliation.',
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

export default function Digital() {
  return (
    <>
      <StructuredData data={digitalProductData} />
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="digital" variant="dark" size={56} className="rounded-none" />
          <PageTitle
            title="Fortrix Digital"
            subtitle="Control and reconciliation for digital lottery and iGaming."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Digital is an independent control and oversight layer for digital lottery and iGaming operations — eInstant, iGaming, digital draw, second-chance, and loyalty programmes. It monitors digital and iGaming events, governs changes to payout tables, odds, RTP, promotions, and loyalty logic through dual-approval workflows, and reconciles wagers, wins, promotions, and loyalty accruals across the digital estate. Continuous hash and timestamp validation, structured exception management, and automated evidence generation give operators and regulators verifiable traceability across all digital activity.
        </p>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            At a Glance
          </h2>
          <div className="space-y-3">
            {[
              'Digital lottery & iGaming',
              '8 control families',
              'Dual-approval changes',
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

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Regulatory Alignment
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            GLI-13 · WLA-SCS:2024 · ISO 27001
          </p>
        </div>
      </Section>
    </>
  );
}
