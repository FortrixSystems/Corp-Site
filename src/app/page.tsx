import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData, organizationData } from '@/components/StructuredData';
import { MODULE_CATALOG, cardTagline, homeCardLine } from '@/lib/modules';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Engineered for truth. Built for oversight.',
  description:
    'Fortrix Systems gives lottery and gaming operators and regulators an independent control and oversight platform for audit readiness, traceability, and operational integrity.',
  path: '/',
  keywords:
    'lottery oversight, gaming oversight, regulated gaming, audit readiness, internal control system, independent oversight, traceability, reconciliation, operational integrity',
});

export default function Home() {
  return (
    <>
      <StructuredData data={organizationData} />
      {/* Hero Section */}
        <Section className="bg-fortrix-navy">
          <PageTitle 
            title="Engineered for truth. Built for oversight."
            subtitle="An independent control and oversight platform for regulated environments."
            dark={true}
          />
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            Fortrix Systems provides lottery and gaming operators and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button href="/contact?interest=demo" variant="secondary" size="lg" className="w-full sm:w-auto">
              Request Demo
            </Button>
          </div>
        </Section>

        {/* Why Fortrix Exists Section */}
        <Section className="bg-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Why Fortrix Exists</h2>
          <div className="mb-10 sm:mb-12 max-w-4xl">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              Lotteries and gaming run on trust, but trust needs proof.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              Fortrix provides an independent, vendor-agnostic control layer that reconciles records across systems and produces audit-ready evidence for operators, regulators, and auditors.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Clear ownership. Clear answers.
            </p>
          </div>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Rigorous Verification</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Verification across integrated systems supports data integrity and system reliability.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Unified Evidence</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Unified evidence and audit trails provide complete transparency and traceability.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Operational Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Operational oversight for jurisdictions supports faster decisions, clearer accountability, and quicker issue resolution.
              </p>
            </div>
          </div>
        </Section>

        {/* The Fortrix ICS Platform Section */}
        <Section className="bg-fortrix-grey-100">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">The Fortrix ICS Platform</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-10 sm:mb-12 max-w-3xl leading-relaxed">
            Fortrix ICS is an Internal Control System: an independent, vendor-agnostic controls layer that reconciles activity across systems and partners to create audit-ready evidence and faster issue resolution without disrupting operations. It includes a core ICS foundation plus optional modules you can add as needed, starting with a small pilot and expanding into fraud intelligence, draw integrity, retail controls, integrations, and oversight reporting.
          </p>
          <div className="space-y-6 sm:space-8 mb-8 sm:mb-10">
            {MODULE_CATALOG.map((module) => (
              <div key={module.id}>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                  <ModuleIcon moduleId={module.id} variant="light" size={40} className="rounded-none" />
                  <Link href={module.href} className="text-fortrix-teal hover:text-fortrix-navy">
                    {module.title}
                  </Link>
                </h3>
                <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                  {cardTagline(homeCardLine(module))}
                </p>
              </div>
            ))}
          </div>
          <div>
            <Button href="/platform" variant="secondary" size="lg">
              Explore the Platform
            </Button>
          </div>
        </Section>
    </>
  );
}
