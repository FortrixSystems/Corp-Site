import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Solutions for Lotteries',
  description: 'Improve governance and internal assurance with Fortrix ICS. Document every operational action, validate vendor system outputs, and strengthen oversight without friction.',
  alternates: {
    canonical: '/solutions/lotteries',
  },
};

const lotteriesProductData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fortrix ICS Solutions for Lotteries',
  description: 'Improve governance and internal assurance with Fortrix ICS. Document every operational action, validate vendor system outputs, and strengthen oversight without friction.',
  provider: {
    '@type': 'Organization',
    name: 'Fortrix Systems Inc.',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Lottery Organizations',
  },
};

export default function Lotteries() {
  return (
    <>
      <StructuredData data={lotteriesProductData} />
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
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports Lotteries</h2>
          <div className="space-y-6 sm:space-y-8">
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Improve Governance</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Strengthen internal assurance through independent verification and comprehensive audit trails.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Document Every Action</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Document every operational action with immutable evidence trails that support regulatory compliance.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Validate Vendor Outputs</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Validate vendor system outputs through neutral verification and reconciliation processes.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Strengthen Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Strengthen oversight without friction through provider-agnostic architecture and clear workflows.
              </p>
            </Card>
          </div>
          <div className="mt-10 sm:mt-12 text-center">
            <Button href="/contact" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
