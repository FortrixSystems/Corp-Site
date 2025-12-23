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
      </Section>

      {/* The Fortrix Platform Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">The Fortrix Platform</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 leading-relaxed">
            Fortrix is an independent control and oversight platform, with modular components that can be deployed together or independently depending on jurisdiction and oversight needs.
          </p>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <strong className="font-semibold text-white">Core Platform</strong> – Independent control and oversight layer for the full system
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <Link href="/modules#beacon" className="font-semibold text-fortrix-teal hover:underline">Beacon</Link> – Proactive monitoring and anomaly detection
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <Link href="/modules#ledger" className="font-semibold text-fortrix-teal hover:underline">Ledger</Link> – Immutable system of record and evidence store
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <Link href="/modules#draw" className="font-semibold text-fortrix-teal hover:underline">Draw</Link> – Draw validation and rules enforcement
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <Link href="/modules#retail" className="font-semibold text-fortrix-teal hover:underline">Retail</Link> – Oversight of physical terminals and retail networks
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
                  <Link href="/modules#connect" className="font-semibold text-fortrix-teal hover:underline">Connect</Link> – API and integration layer across vendors and systems
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
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
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">What Is Fortrix ICS?</h2>
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            A modern internal control system built to validate, reconcile, and audit mission-critical lottery activity.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Modular architecture supporting fraud detection, evidence trails, draw validation, and multi-provider integrations.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Independent, jurisdiction-controlled, audit-ready.
          </p>
        </div>
      </Section>


      {/* Platform Pillars Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Platform Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Verification</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Reconstructing truth across systems through rigorous validation and reconciliation.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Transparency</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Clear audit trails and documented workflows enable complete traceability.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Neutrality</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Provider-agnostic design ensures independent oversight without vendor bias.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Precision</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Consistent, controlled processes reduce ambiguity and support compliance.
            </p>
          </Card>
        </div>
      </Section>

      {/* Why It Matters Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">Why It Matters</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6 sm:mb-8 leading-relaxed">
            Written for auditors & regulators:
          </p>
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
                Documents every action
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
            <Button href="/modules" variant="outline" size="lg">
              Explore Modules
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
