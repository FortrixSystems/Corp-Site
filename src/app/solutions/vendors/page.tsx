import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Solutions for CGS & Lottery Vendors',
  description:
    'Fortrix is the independent oversight layer for CGS and lottery vendors—clear responsibilities, stronger integrations, and credibility with jurisdictions.',
  path: '/solutions/vendors',
  keywords:
    'CGS vendors, lottery vendors, vendor integrations, independent oversight layer, vendor credibility, lottery partnerships',
});

const vendorsProductData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fortrix ICS Solutions for CGS Vendors',
  description: 'Fortrix acts as the independent oversight layer, supporting integrations without replacement. Clarifies responsibilities and enhances vendor credibility.',
  provider: {
    '@type': 'Organization',
    name: 'Fortrix Systems',
  },
  areaServed: {
    '@type': 'Place',
    name: 'CGS Vendor Organizations',
  },
};

export default function Vendors() {
  return (
    <>
      <StructuredData data={vendorsProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Solutions for CGS Vendors"
          subtitle="Independent oversight layer"
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix acts as the independent oversight layer, supporting integrations without replacement. Clarifies responsibilities and enhances vendor credibility with jurisdictions.
        </p>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">How Fortrix ICS Supports CGS Vendors</h2>
          <div className="space-y-6 sm:space-y-8">
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Independent Oversight</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Fortrix acts as the independent oversight layer, providing neutral verification without replacing vendor systems.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Integration Support</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Supports integrations without replacement, enabling seamless data flow through provider-agnostic APIs.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Clarify Responsibilities</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Clarifies responsibilities and improves collaboration through transparent workflows and documented processes.
              </p>
            </Card>
            <Card hover>
              <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Enhance Credibility</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base">
                Enhances vendor credibility with jurisdictions through independent verification and audit-ready documentation.
              </p>
            </Card>
          </div>
          <div className="mt-10 sm:mt-12">
            <Button href="/contact?interest=demo" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
