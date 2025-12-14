import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Retail - Provider-Agnostic API Layer',
  description: 'Provider-agnostic API and integration layer for CGS data. Consistent payload formats, transaction verification, and reduced dependency on vendor-specific systems.',
  alternates: {
    canonical: '/modules/retail',
  },
};

const retailProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Retail',
  description: 'Provider-agnostic API and integration layer for CGS data with consistent payload formats and transaction verification.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  brand: {
    '@type': 'Brand',
    name: 'Fortrix Systems Inc.',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function Retail() {
  return (
    
      <>
      <StructuredData data={retailProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Retail"
          subtitle="Provider-agnostic API and integration layer for CGS data."
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-lg text-fortrix-grey-700 font-regular">
            Fortrix Retail provides a provider-agnostic API and integration layer for CGS data, enabling consistent payload formats and transaction verification across vendors.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl font-heading font-semibold mb-12 text-fortrix-grey-900 text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Consistent Formats</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Consistent payload formats normalize data across different vendor systems.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Transaction Verification</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Transaction verification ensures data integrity and system reliability.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Performance Monitoring</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Performance + SLA monitoring (future module tie-in) enables operational oversight.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Vendor Independence</h3>
            <p className="text-fortrix-grey-700 font-regular">
              Reduces dependency on vendor-specific systems through standardized interfaces.
            </p>
          </Card>
        </div>
      </Section>

      {/* Diagram Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Architecture</h2>
          <div className="bg-white rounded-lg border border-fortrix-grey-300 p-8">
            <div className="aspect-video bg-fortrix-grey-100 rounded-lg flex items-center justify-center">
              <p className="text-fortrix-navy/50 font-regular">Diagram: Vendors → Retail API → ICS modules</p>
            </div>
          </div>
        </div>
      </Section>
      </>
    
  );
}

