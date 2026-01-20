import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Platform | Fortrix Systems',
  description: 'An independent control and oversight platform for regulated lottery environments. Modular components including Beacon, Ledger, Draw, Retail, Connect, and Insight for comprehensive oversight.',
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
      {/* Hero Section */}
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

      {/* The Fortrix Platform Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">The Fortrix Platform</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-8 sm:mb-10 leading-relaxed">
            Fortrix is an independent control and oversight platform, with modular components that can be deployed together or independently depending on jurisdiction and oversight needs.
          </p>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <strong className="font-semibold text-fortrix-grey-900">Core Platform</strong> – Independent control and oversight layer for the full system
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#beacon" className="font-semibold text-fortrix-teal hover:underline">Beacon</Link> – Proactive monitoring and anomaly detection
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#ledger" className="font-semibold text-fortrix-teal hover:underline">Ledger</Link> – Immutable system of record and evidence store
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#draw" className="font-semibold text-fortrix-teal hover:underline">Draw</Link> – Draw validation and rules enforcement
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#retail" className="font-semibold text-fortrix-teal hover:underline">Retail</Link> – Oversight of physical terminals and retail networks
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#connect" className="font-semibold text-fortrix-teal hover:underline">Connect</Link> – API and integration layer across vendors and systems
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  <Link href="/modules#insight" className="font-semibold text-fortrix-teal hover:underline">Insight</Link> – Audit, investigation, and reporting layer
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Button href="/modules" variant="secondary" size="lg">
              Explore our modules
            </Button>
          </div>
        </div>
      </Section>

      {/* What Is Fortrix ICS Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">What Is Fortrix ICS?</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Fortrix ICS is an independent controls layer that reconciles activity across systems and partners, creating audit-ready evidence and faster issue resolution without disrupting operations.
            </p>
          </div>
        </div>
      </Section>

      {/* Verification Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Verification</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Reconciling records across systems through rigorous validation and reconciliation.
          </p>
        </div>
      </Section>

      {/* Neutrality Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">Neutrality</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Provider-agnostic design supports consistent oversight across partners and systems.
          </p>
        </div>
      </Section>

      {/* Built for Auditors and Regulators Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Built for auditors and regulators:</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Reduces operational ambiguity
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Documents key actions and approvals
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Supports compliance and jurisdictional controls
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Enables evidence-based decision making
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Button href="/modules" variant="secondary" size="lg">
              Explore Modules
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
