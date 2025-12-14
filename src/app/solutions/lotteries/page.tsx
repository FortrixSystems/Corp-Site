import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Solutions for Lotteries',
  description: 'Improve governance and internal assurance with Fortrix ICS. Document every operational action, validate vendor system outputs, and strengthen oversight without friction.',
  alternates: {
    canonical: '/solutions/lotteries',
  },
};

export default function Lotteries() {
  return (
    
      <>
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Solutions for Lotteries"
          subtitle="Improve governance and internal assurance"
          dark={true}
        />
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports Lotteries</h2>
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Improve Governance</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Strengthen internal assurance through independent verification and comprehensive audit trails.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Document Every Action</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Document every operational action with immutable evidence trails that support regulatory compliance.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Validate Vendor Outputs</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Validate vendor system outputs through neutral verification and reconciliation processes.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Strengthen Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Strengthen oversight without friction through provider-agnostic architecture and clear workflows.
              </p>
            </Card>
          </div>
        </div>
      </Section>
      </>
    
  );
}
