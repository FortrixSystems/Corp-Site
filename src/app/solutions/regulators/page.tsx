import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Solutions for Regulators | Fortrix Systems',
  description: 'Independent visibility, audit-ready outputs, and defensible oversight across lottery operations and vendor ecosystems. Solutions designed for lottery regulators.',
  keywords: 'lottery regulators, regulatory oversight, audit-ready outputs, independent visibility, regulatory solutions, oversight tools, regulatory compliance, audit preparation',
  alternates: {
    canonical: '/solutions/regulators',
  },
};

const regulatorsProductData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fortrix ICS Solutions for Regulators',
  description: 'Clear, structured evidence for investigations. Full reconstruction of system activity with independent control environment.',
  provider: {
    '@type': 'Organization',
    name: 'Fortrix Systems Inc.',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Regulatory Organizations',
  },
};

export default function Regulators() {
  return (
    <>
      <StructuredData data={regulatorsProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Solutions for Regulators"
          subtitle="Clear, structured evidence for investigations"
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Clear, structured evidence for investigations. Full reconstruction of system activity with independent control environment. Reduce audit backlog and ambiguity.
        </p>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports Regulators</h2>
          <div className="space-y-6 sm:space-y-8">
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Clear Evidence</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Clear, structured evidence for investigations enables efficient regulatory oversight and compliance verification.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Full Reconstruction</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Full reconstruction of system activity provides complete transparency and traceability for audit purposes.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Independent Control</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Independent control environment ensures neutral oversight without vendor bias or influence.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Reduce Ambiguity</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Reduction in audit backlog and ambiguity through automated verification and structured documentation.
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
