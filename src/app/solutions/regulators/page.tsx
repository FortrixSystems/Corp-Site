import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Solutions for Regulators',
  description: 'Clear, structured evidence for investigations. Full reconstruction of system activity with independent control environment. Reduce audit backlog and ambiguity.',
  alternates: {
    canonical: '/solutions/regulators',
  },
};

export default function Regulators() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Solutions for Regulators"
          subtitle="Clear, structured evidence for investigations"
          dark={true}
        />
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports Regulators</h2>
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Clear Evidence</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Clear, structured evidence for investigations enables efficient regulatory oversight and compliance verification.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Full Reconstruction</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Full reconstruction of system activity provides complete transparency and traceability for audit purposes.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Independent Control</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Independent control environment ensures neutral oversight without vendor bias or influence.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Reduce Ambiguity</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Reduction in audit backlog and ambiguity through automated verification and structured documentation.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
