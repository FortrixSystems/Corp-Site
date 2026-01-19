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
          subtitle="Provider-agnostic API and transaction verification layer."
          dark={true}
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix Retail standardizes payloads and streamlines integrations across vendor systems, enabling consistent oversight of transactions, handoffs, and reconciliations.
          </p>
        </div>
      </Section>

      {/* Works With CGS Vendors Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Works With CGS Vendors</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Designed to integrate with vendor platforms through standardized interfaces, reducing custom rework and making oversight and reconciliation smoother for everyone.
          </p>
        </div>
      </Section>

      {/* Monitoring Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Monitoring</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Optional performance and SLA monitoring to support operational oversight.
          </p>
        </div>
      </Section>
      </>
    
  );
}

