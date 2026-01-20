import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Security Engineered for Oversight | Fortrix Systems',
  description: 'Security engineered for oversight. In regulated lottery environments, trust is earned through traceability, controlled access, and audit readiness. Independent controls layer for lottery systems.',
  keywords: 'lottery security, trust and security, data isolation, access control, audit log integrity, security operations, regulated environments, RBAC, segregation of duties, audit readiness',
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
          subtitle="In regulated lottery environments, trust is earned through traceability, controlled access, and audit readiness. That is the standard Fortrix is built to support."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Lottery programs operate across complex ecosystems: core gaming systems, iLottery platforms, retailers, payment partners, and service providers. Oversight teams still need a clear line from source activity to reported outcomes, even when responsibilities and data sit across multiple parties. Fortrix provides an independent controls layer that runs alongside existing operational and vendor systems, strengthening governance without disrupting day-to-day operations.
        </p>
      </Section>

      {/* Trust Introduction Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            We focus on making oversight practical. That means validating activity independently, preserving the records required to support reviews and audits, and keeping oversight controls separate from operational systems so accountability stays clear.
          </p>
        </div>
      </Section>

      {/* How Fortrix Approaches Trust and Security */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How we approach trust and security</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Independently validates system activity rather than relying solely on vendor-provided reporting.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Preserves a complete, traceable record of key events and control actions to support audits, reviews, and investigations.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Maintains clear separation between operational systems and oversight controls to support independent review.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Supports jurisdiction-level governance and regulatory oversight requirements across multi-provider environments.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Data Isolation Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Data isolation</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Each customer deployment runs in an isolated environment with segregated data storage and dedicated resources. This supports jurisdiction-controlled environments and reduces cross-tenant risk.
          </p>
        </div>
      </Section>

      {/* Access Control Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Access control</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Role-based access control ensures access is aligned to responsibilities so users only see and do what they are permitted to.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              RBAC policies support consistent permissioning across teams, roles, and oversight functions.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Segregation of duties supports separation between creation, approval, and review activities, reducing conflicts of interest and strengthening operational integrity.
            </p>
          </div>
        </div>
      </Section>

      {/* Audit Integrity Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Audit log integrity</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Event logging is designed to be append-only and traceable, supporting reconstruction over time.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Change tracking captures what changed, who made the change, and when it occurred, with export-ready formats to support audit workflows and regulatory submissions.
            </p>
          </div>
        </div>
      </Section>

      {/* Built for Audit and Review Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Built for audit and review</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix supports audits, reviews, and regulatory inquiries by maintaining clear, traceable records of system activity across partners and environments. When questions arise, teams can review what happened, follow the chain of events, and resolve issues faster with consistent documentation and accountability.
          </p>
        </div>
      </Section>

      {/* Security Operations Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Security operations</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Security is maintained through disciplined operational practices, not just product design.
            </p>
            <div className="space-y-3 sm:space-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  We encrypt data in transit and at rest.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  We enforce strong authentication alongside role-based access control, including RBAC policies and segregation of duties where appropriate.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  We monitor for anomalous access and operational patterns, and we retain logs to support review and investigation needs.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  We apply routine patching and vulnerability management processes to reduce exposure over time.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  We maintain incident response procedures aligned to regulated-environment expectations, including containment, investigation, and documented remediation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Final Statement Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Trust and security at Fortrix are foundational to how we design, deploy, and operate the platform, so oversight remains reliable as lottery environments scale and evolve.
          </p>
        </div>
      </Section>
      </>
    
  );
}
