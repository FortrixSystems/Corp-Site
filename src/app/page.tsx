import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ModuleCard from '@/components/ModuleCard';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData, organizationData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Engineered for truth. Built for oversight. | Fortrix Systems',
  description: 'Fortrix Systems provides lotteries and regulators with an independent control and oversight platform for regulated environments. Independent oversight, audit readiness, and operational integrity.',
  keywords: 'lottery oversight, audit readiness, internal control system, independent oversight, regulated lottery environments, vendor-agnostic, traceability, reconciliation, evidence, operational integrity',
  alternates: {
    canonical: '/',
  },
};

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
            Fortrix Systems provides lotteries and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
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
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="beacon" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/beacon" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Beacon</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Fraud intelligence and risk patterns</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="ledger" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/ledger" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Ledger</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Evidence engine for system-of-record integrity</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="draw" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/draw" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Draw</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Draw configuration, validation, and discrepancy analysis</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="retail" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/retail" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Retail</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Retail and provider-agnostic controls integration layer</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="connect" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/connect" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Connect</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">API and integration layer across partners and systems</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId="insight" variant="light" size={40} className="rounded-none" />
                <Link href="/modules/insight" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Insight</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Audit, review, and reporting layer for oversight teams</p>
            </div>
          </div>
          <div className="text-center">
            <Button href="/platform" variant="secondary" size="lg">
              Explore the Platform
            </Button>
          </div>
        </Section>
    </>
  );
}
