import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Trust & Security - Security Engineered for Oversight',
  description: 'Security engineered for oversight. Data isolation with spin-up-per-customer model, RBAC & segregation-of-duties, immutable audit logs, and AWS containerized deployment architecture.',
  alternates: {
    canonical: '/trust-security',
  },
};

export default function TrustSecurity() {
  return (
    <
      {/* Hero Section */}
      <Section className="bg-fortrix-charcoal">
        <PageTitle 
          title="Security engineered for oversight."
          subtitle=""
          dark={true}
        />
      </Section>

      {/* Data Isolation Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Data Isolation</h2>
          <p className="text-lg text-fortrix-grey-700 font-regular mb-6">
            Spin-up-per-customer model ensures complete data isolation and jurisdiction-controlled environments.
          </p>
          <p className="text-lg text-fortrix-grey-700 font-regular">
            Each customer deployment operates independently with dedicated resources and isolated data storage.
          </p>
        </div>
      </Section>

      {/* Access Control Section */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-fortrix-grey-900">Access Control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">RBAC</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Role-based access control (RBAC) ensures users have appropriate permissions based on their responsibilities.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Segregation of Duties</h3>
            <p className="text-fortrix-grey-700 font-regular mb-4">
              Segregation-of-duties enforcement prevents conflicts of interest and maintains operational integrity.
            </p>
          </Card>
        </div>
      </Section>

      {/* Audit Integrity Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Audit Log Integrity</h2>
          <div className="space-y-6">
            <p className="text-lg text-fortrix-grey-700 font-regular">
              Immutable event recording ensures audit logs cannot be altered or deleted.
            </p>
            <p className="text-lg text-fortrix-grey-700 font-regular">
              Change tracking documents every modification with timestamp, user, and action details.
            </p>
            <p className="text-lg text-fortrix-grey-700 font-regular">
              Export-ready formats support regulatory submissions and compliance reporting.
            </p>
          </div>
        </div>
      </Section>

      {/* Deployment Architecture Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Deployment Architecture</h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">AWS Infrastructure</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Deployed on AWS with enterprise-grade security controls and compliance certifications.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Containerized Deployment</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Containerized architecture enables controlled, reproducible deployments with version management.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Controlled Processes</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Controlled deployment processes ensure consistency, security, and auditability across environments.
              </p>
            </Card>
          </div>
        </div>
      </Section>
      <
  );
}
