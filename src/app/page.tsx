import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import ModuleCard from '@/components/ModuleCard';
import { StructuredData, organizationData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Independent Truth for Lottery Systems',
  description: 'Fortrix Systems provides lotteries and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data. Clarity at scale. Integrity by design.',
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
            title="Independent truth for lottery systems."
            subtitle="Clarity at scale. Integrity by design."
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
          <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-12 max-w-4xl">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Independent. Neutral. Vendor-agnostic.</p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Evidence over opinion.</p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Clarity, not complexity.</p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Internal control systems built to withstand regulatory scrutiny.</p>
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
            Fortrix ICS is an Internal Control System, an independent controls layer that reconciles activity across systems and partners, creating audit-ready records and faster issue resolution without disrupting operations.
          </p>
          <div className="space-y-6 sm:space-8 mb-8 sm:mb-10">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/beacon" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Beacon</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Fraud intelligence & risk patterns</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/ledger" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Ledger</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Evidence engine for system-of-record integrity</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/draw" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Draw</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Draw configuration, validation, and discrepancy analysis</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/retail" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Retail</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Integration and provider-agnostic API layer</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/clarity" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Clarity</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Audit log search and transparency</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/connect" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Connect</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">API and integration layer across partners and systems</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-fortrix-grey-900">
                <Link href="/modules/insight" className="text-fortrix-teal hover:text-fortrix-navy">Fortrix Insight</Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">Audit, review, and reporting layer for oversight teams</p>
            </div>
          </div>
          <div className="text-center mb-10 sm:mb-12">
            <Button href="/platform" variant="secondary" size="lg">
              Explore the Platform
            </Button>
          </div>

          {/* Trusted By Design Subsection */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Trusted By Design</h3>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular max-w-4xl leading-relaxed">
              Built for regulated environments where evidence, traceability, and repeatable controls matter.
            </p>
          </div>

          {/* Our Philosophy Subsection */}
          <div className="mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Our Philosophy</h3>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular max-w-4xl leading-relaxed">
              Systems verify and validate to reduce ambiguity, support consistent outcomes, and simplify oversight.
            </p>
          </div>

          {/* Feature Subsections */}
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Secure</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Jurisdiction isolation, role-based access, and audit-ready logging are built in by design.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Works with CGS providers</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Designed to sit alongside CGS platforms, providing independent assurance and clear evidence without disrupting vendor operations.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Regulator support</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Support for regulator workflows enables evidence-based reviews, audit readiness, and consistent compliance.
              </p>
            </div>
          </div>
        </Section>

        {/* Our Purpose Section */}
        <Section className="bg-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Purpose</h2>
          <div className="max-w-4xl space-y-4 sm:space-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Lotteries operate in a high-trust environment where certainty is not optional.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Fortrix Systems delivers Fortrix ICS, our Internal Control System. It is an independent controls layer that reconciles activity across systems and partners, creating audit-ready reporting and faster issue resolution without disrupting operations.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Fortrix helps lotteries and regulators align records across integrated systems, keep clear traceability, and support audits, reviews, and ongoing oversight.
            </p>
          </div>
        </Section>
    </>
  );
}
