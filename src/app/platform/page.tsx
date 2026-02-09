import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

const ICS_INFAGRAPHIC_ALT = 'Fortrix Independent Control System (ICS) overview infographic showing how an ICS connects gaming platform, retail/POS, payments, and vendors to enable automated reconciliation, issue alerts, and audit-ready traceability.';

export const metadata: Metadata = {
  title: 'Platform | Fortrix Systems',
  description: 'Fortrix ICS is an Independent Control System for lotteries and gaming that connects vendor systems to automate reconciliation, trigger issue alerts, and deliver audit-ready traceability and evidence.',
  keywords: 'Fortrix ICS platform, internal control system, modular oversight, Beacon, Ledger, Draw, Retail, Connect, Insight, verification, reconciliation, vendor-agnostic, audit-ready evidence',
  alternates: {
    canonical: '/platform',
  },
};

const platformProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix ICS Platform',
  description: 'A modern internal control system built to validate, reconcile, and audit mission-critical lottery activity.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  brand: {
    '@type': 'Brand',
    name: 'Fortrix Systems Inc.',
  },
};

export default function Platform() {
  return (
    <>
      <StructuredData data={platformProductData} />
      {/* 1. Hero section – no changes */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Internal Controls. Reconciled and Verified."
          subtitle=""
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix is an independent control and oversight platform, with modular components that can be deployed together or independently depending on jurisdiction and oversight needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
          <Button href="/modules" variant="secondary" size="lg" className="w-full sm:w-auto">
            Explore our modules
          </Button>
        </div>
      </Section>

      {/* 2. The Fortrix Platform – first content section; stronger separation from hero */}
      <Section className="bg-white pt-16 sm:pt-20 md:pt-24 !pb-6 sm:!pb-8 md:!pb-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 sm:mb-6 text-fortrix-grey-900">The Fortrix Platform</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            Fortrix is an independent control and oversight platform, with modular components that can be deployed together or independently depending on jurisdiction and oversight needs.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1" aria-hidden="true" />
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed pt-0.5">
                <strong className="font-semibold text-fortrix-grey-900">Core Platform</strong> – Independent control and oversight layer for the full system
              </p>
            </div>
            {[
              { id: 'beacon', label: 'Beacon', desc: 'Proactive monitoring and anomaly detection' },
              { id: 'ledger', label: 'Ledger', desc: 'Immutable system of record and evidence store' },
              { id: 'draw', label: 'Draw', desc: 'Draw validation and rules enforcement' },
              { id: 'retail', label: 'Retail', desc: 'Oversight of physical terminals and retail networks' },
              { id: 'connect', label: 'Connect', desc: 'API and integration layer across vendors and systems' },
              { id: 'insight', label: 'Insight', desc: 'Audit, investigation, and reporting layer' },
            ].map((mod) => (
              <div key={mod.id} className="flex gap-4 items-center">
                <ModuleIcon moduleId={mod.id} variant="light" size={40} className="rounded-none flex-shrink-0" />
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed pt-0.5">
                  <Link href={`/modules/${mod.id}`} className="font-semibold text-fortrix-teal hover:underline">{mod.label}</Link> – {mod.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Button href="/modules" variant="secondary" size="lg">
              Explore our modules
            </Button>
          </div>
        </div>
      </Section>

      {/* 3. ICS Overview Infographic – supporting explainer after The Fortrix Platform */}
      <Section className="bg-white !pt-6 sm:!pt-8 md:!pt-10 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Image
            src="/images/ics-overview-infographic.png"
            alt={ICS_INFAGRAPHIC_ALT}
            width={1200}
            height={800}
            className="w-full h-auto object-contain max-w-full"
          />
        </div>
      </Section>

      {/* 4. What Is Fortrix ICS? */}
      <Section className="bg-fortrix-grey-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 sm:mb-6 text-fortrix-grey-900">What Is Fortrix ICS?</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed max-w-3xl">
            Fortrix ICS is an independent controls layer that reconciles activity across systems and partners, creating audit-ready evidence and faster issue resolution without disrupting operations.
          </p>
        </div>
      </Section>

      {/* 5. Verification */}
      <Section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 sm:mb-6 text-fortrix-grey-900">Verification</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed max-w-3xl">
            Reconciling records across systems through rigorous validation and reconciliation.
          </p>
        </div>
      </Section>

      {/* 6. Neutrality */}
      <Section className="bg-fortrix-grey-100 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 sm:mb-6 text-fortrix-grey-900">Neutrality</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed max-w-3xl">
            Provider-agnostic design supports consistent oversight across partners and systems.
          </p>
        </div>
      </Section>

      {/* 7. Built for Auditors and Regulators – elevated importance, crisp list, intentional CTA */}
      <Section className="bg-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-5 sm:mb-6 text-fortrix-grey-900">Built for auditors and regulators:</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              'Reduces operational ambiguity',
              'Documents key actions and approvals',
              'Supports compliance and jurisdictional controls',
              'Enables evidence-based decision making',
            ].map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1.5" aria-hidden="true" />
                <span className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:mt-8 text-center">
            <Button href="/modules" variant="secondary" size="lg">
              Explore Modules
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
