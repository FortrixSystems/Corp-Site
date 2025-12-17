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

      {/* Main Content Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">The Compliance Layer Lotteries Trust</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-10 sm:mb-12 leading-relaxed">
            Lotteries operate under intense public scrutiny. Fortrix gives you provable, regulator-grade transparency — so you're always ready for audit, investigation, or political review.
          </p>
          
          <div className="space-y-8 sm:space-y-10">
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Designed for Regulated Environments</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Purpose-built for the unique requirements of lottery operations — with support for draw oversight, config controls, reconciliation, and approval workflows that stand up to scrutiny.
              </p>
            </Card>
            
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Independent, Verifiable Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Capture and confirm operational activity across your ecosystem with immutable records, clear attribution, and built-in traceability.
              </p>
            </Card>
            
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Compliance Without the Complexity</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                From audit prep to day-to-day oversight, Fortrix automates the burden of documentation — giving your team more time to focus on performance and risk management.
              </p>
            </Card>
            
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Built to Work With Your Vendors</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Fortrix sits alongside existing vendor systems to provide an extra layer of visibility, without disrupting workflows or relationships.
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
