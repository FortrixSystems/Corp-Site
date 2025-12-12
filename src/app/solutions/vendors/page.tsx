import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Solutions for CGS Vendors',
  description: 'Fortrix acts as the independent oversight layer, supporting integrations without replacement. Clarifies responsibilities and enhances vendor credibility with jurisdictions.',
  alternates: {
    canonical: '/solutions/vendors',
  },
};

export default function Vendors() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Solutions for CGS Vendors"
          subtitle="Independent oversight layer"
          dark={true}
        />
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports CGS Vendors</h2>
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Independent Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Fortrix acts as the independent oversight layer, providing neutral verification without replacing vendor systems.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Integration Support</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Supports integrations without replacement, enabling seamless data flow through provider-agnostic APIs.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Clarify Responsibilities</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Clarifies responsibilities and improves collaboration through transparent workflows and documented processes.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Enhance Credibility</h3>
              <p className="text-fortrix-grey-700 font-regular">
                Enhances vendor credibility with jurisdictions through independent verification and audit-ready documentation.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
