import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';
import { LEGAL_ENTITY_NAME } from '@/lib/site-constants';
import { getModuleById } from '@/lib/modules';
import { pageMetadata } from '@/lib/seo';

const moduleMeta = getModuleById('regulatory-filing')!;

const TAGLINE = moduleMeta.tagline;

const PURPOSE =
  'Fortrix Regulatory Filing turns oversight data into submission-ready regulatory reports, with validation and approval applied to every filing. FINTRAC is the first supported regime, with additional reporting adaptors to follow.';

const CAPABILITIES = [
  {
    title: 'Validated Before Submission',
    body: 'Each filing is validated against the required format before it can be submitted, so issues are caught before they reach the regulator.',
  },
  {
    title: 'Approval on Every Filing',
    body: 'Filings are reviewed and approved by an authorized officer before submission. Nothing is submitted automatically.',
  },
  {
    title: 'Audit-Ready by Default',
    body: 'Every submission is retained as a complete record, with corrections traced back to the original filing.',
  },
  {
    title: 'Built to Extend',
    body: 'FINTRAC reporting is supported today, with additional regulators and report types added as new adaptors.',
  },
] as const;

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Regulatory Filing — Reporting & Submission',
  description:
    'Fortrix Regulatory Filing prepares, validates, and submits regulatory reports from one controlled workflow. FINTRAC supported today, with more adaptors to follow.',
  path: '/modules/regulatory-filing',
  keywords:
    'regulatory filing, regulatory reporting, FINTRAC, AML reporting, submission workflow, audit-ready reporting',
});

const regulatoryFilingProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Regulatory Filing',
  description:
    'Fortrix Regulatory Filing prepares, validates, and submits regulatory reports from one controlled workflow. FINTRAC supported today, with more adaptors to follow.',
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

export default function RegulatoryFiling() {
  return (
    <>
      <StructuredData data={regulatoryFilingProductData} />
      <Section className="bg-fortrix-navy">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="regulatory-filing" variant="dark" size={56} className="rounded-none" />
          <PageTitle title="Fortrix Regulatory Filing" subtitle={TAGLINE} dark={true} />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          {PURPOSE}
        </p>
      </Section>

      {CAPABILITIES.map((capability, index) => (
        <Section
          key={capability.title}
          className={index % 2 === 0 ? 'bg-fortrix-grey-100' : 'bg-white'}
        >
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
              {capability.title}
            </h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              {capability.body}
            </p>
          </div>
        </Section>
      ))}
    </>
  );
}
