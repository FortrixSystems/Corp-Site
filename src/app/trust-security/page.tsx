import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Trust & Security | Fortrix Systems',
  description: 'Trust and security built around independent verification, defensible evidence, and controls designed to stand up to regulatory scrutiny in lottery environments.',
  alternates: {
    canonical: '/trust-security',
  },
};

const securityData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Trust & Security - Fortrix Systems',
  description: 'Security engineered for oversight. Data isolation, access control, audit integrity, and AWS deployment architecture.',
  about: {
    '@type': 'Thing',
    name: 'Enterprise Security',
  },
};

export default function TrustSecurity() {
  return (
    <>
      <StructuredData data={securityData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Security engineered for oversight."
          subtitle="Trust and security at Fortrix are built around independent verification, defensible evidence, and controls designed to stand up to regulatory scrutiny."
          dark={true}
        />
      </Section>

      {/* Trust Introduction Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed mb-4">
            In regulated lottery environments, confidence is built on evidence. Fortrix preserves a verifiable record of what happened, when it happened, and why, even across complex, multi-provider systems.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix operates as an independent control layer that complements operational and vendor systems, supporting consistent oversight and increasing confidence in outcomes.
          </p>
        </div>
      </Section>

      {/* How Fortrix Approaches Trust and Security */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix approaches trust and security</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Independently validates system activity rather than relying on vendor-provided reporting
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Preserves tamper-evident records to maintain a complete and traceable evidence trail
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Maintains clear separation between operational systems and oversight controls
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Supports jurisdiction-level governance and regulatory oversight requirements.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Designed to operate consistently across multi-provider environments
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Isolation Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Data Isolation</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6 leading-relaxed">
            Spin-up-per-customer model ensures complete data isolation and jurisdiction-controlled environments.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Each customer deployment operates independently with dedicated resources and isolated data storage.
          </p>
        </div>
      </Section>

      {/* Access Control Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Access Control</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">RBAC</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Role-based access control (RBAC) ensures users have appropriate permissions based on their responsibilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">Segregation of Duties</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Segregation-of-duties enforcement prevents conflicts of interest and maintains operational integrity.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Audit Integrity Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Audit Log Integrity</h2>
          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Immutable event recording ensures audit logs cannot be altered or deleted.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Change tracking documents every modification with timestamp, user, and action details.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Export-ready formats support regulatory submissions and compliance reporting.
            </p>
          </div>
        </div>
      </Section>

      {/* Built for Audit and Review Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Built for Audit and Review</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-6">
            Fortrix supports audits, reviews, and regulatory inquiries by maintaining clear, traceable, and tamper-evident records of system activity across partners and environments. Data is preserved in a way that supports reconstruction and accountability over time.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Trust and security at Fortrix are not features. They&apos;re foundational to how the platform is designed and operated.
          </p>
        </div>
      </Section>
      </>
    
  );
}
