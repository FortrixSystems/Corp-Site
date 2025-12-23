import type { Metadata } from 'next';
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
            <Button href="/contact" size="lg" className="w-full sm:w-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card hover>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Rigorous Verification</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Rigorous verification across vendors ensures data integrity and system reliability.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Unified Evidence</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Unified evidence and audit trails provide complete transparency and traceability.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Operational Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Operational oversight for jurisdictions enables evidence-based decision making.
              </p>
            </Card>
          </div>
        </Section>

        {/* Platform Overview Section */}
        <Section className="bg-fortrix-grey-100">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">The Fortrix ICS Platform</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-10 sm:mb-12 max-w-3xl leading-relaxed">
            A modular internal control system engineered to validate, reconcile, and document every critical interaction across the lottery ecosystem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
            <ModuleCard
              title="Fortrix Beacon"
              description="Fraud intelligence & risk patterns"
              href="/modules/beacon"
            />
            <ModuleCard
              title="Fortrix Ledger"
              description="Evidence engine for system-of-record integrity"
              href="/modules/ledger"
            />
            <ModuleCard
              title="Fortrix Draw"
              description="Draw configuration, validation, and discrepancy analysis"
              href="/modules/draw"
            />
            <ModuleCard
              title="Fortrix Retail"
              description="Integration and provider-agnostic API layer"
              href="/modules/retail"
            />
            <ModuleCard
              title="Fortrix Clarity"
              description="Audit log search and transparency"
              href="/modules/clarity"
            />
          </div>
          <Button href="/platform" variant="outline" size="lg">
            Explore the Platform
          </Button>
        </Section>

        {/* Trusted By Design Section */}
        <Section className="bg-white">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Trusted By Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Security Posture</h3>
                <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                  Statement of security posture with spin-up-per-customer model ensuring data isolation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Independence</h3>
                <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                  Independence from CGS providers ensures neutral oversight and vendor-agnostic architecture.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Regulator Support</h3>
                <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                  Support for regulator workflows enables evidence-based investigations and compliance.
                </p>
              </div>
            </div>
        </div>
      </Section>
    </>
  );
}
