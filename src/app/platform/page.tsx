import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix ICS Platform - Internal Controls Reconstructed',
  description: 'A modern internal control system built to validate, reconcile, and audit mission-critical lottery activity. Modular architecture supporting fraud detection, evidence trails, draw validation, and multi-provider integrations.',
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
    <ProtectedContent>
      <>
      <StructuredData data={platformProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-charcoal">
        <PageTitle 
          title="Internal Controls. Reconstructed and Verified."
          subtitle=""
          dark={true}
        />
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

      {/* Architecture Diagram Section */}
      <Section className="bg-fortrix-grey-100">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Architecture</h2>
        <div className="max-w-4xl mx-auto">
          <div className="border border-fortrix-grey-300 p-6 sm:p-8 md:p-12 mb-8">
            <div className="aspect-video flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                  <div className="w-2 h-2 border border-fortrix-grey-500/40"></div>
                  <div className="flex-1 h-px bg-fortrix-teal/50"></div>
                  <div className="w-2 h-2 border border-fortrix-teal/50"></div>
                  <div className="flex-1 h-px bg-fortrix-teal/50"></div>
                  <div className="w-2 h-2 border border-fortrix-teal/50"></div>
                  <div className="flex-1 h-px bg-fortrix-grey-500/40"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-fortrix-grey-700 font-regular text-sm sm:text-base">
            <p>CGS vendors → Fortrix Retail → Beacon / Ledger / Draw / Clarity → Regulator Oversight</p>
          </div>
        </div>
      </Section>

      {/* Platform Pillars Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-white">Platform Pillars</h2>
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
          <div className="mt-12 text-center">
            <Button href="/modules" variant="outline" size="lg">
              Explore Modules
            </Button>
          </div>
        </div>
      </Section>
      </>
    </ProtectedContent>
  );
}
