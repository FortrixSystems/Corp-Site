import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Draw - Draw Configuration & Validation',
  description: 'Controls draw configuration, validation, and discrepancy detection. Ensures authorized draw procedures, validates winning numbers, and generates clear audit documentation.',
  alternates: {
    canonical: '/modules/draw',
  },
};

const drawProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Draw',
  description: 'Draw configuration and validation module that controls draw procedures, validates winning numbers, and detects discrepancies.',
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

export default function Draw() {
  return (
    
      <>
      <StructuredData data={drawProductData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Fortrix Draw"
          subtitle="Secure draw configuration, validation, and discrepancy analysis."
          dark={true}
        />
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            From draw setup to winning number validation, Fortrix Draw controls procedures, enforces dual-approval workflows, and prevents unauthorized changes — reducing operational risk.
          </p>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-10 sm:mb-12 text-white">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Authorized Procedures</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Ensures authorized draw procedures are followed with controlled configuration management.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Number Validation</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Validates winning numbers through rigorous verification and reconciliation processes.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Configuration Drift</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Identifies configuration drift and unauthorized changes to draw procedures.
            </p>
          </Card>
          <Card hover dark>
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 text-white">Audit Documentation</h3>
            <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
              Generates clear audit documentation supporting compliance and regulatory oversight.
            </p>
          </Card>
        </div>
      </Section>

      {/* Diagram Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Process Flow</h2>
          <div className="bg-white rounded-lg border border-fortrix-grey-300 p-8">
            <div className="aspect-video bg-fortrix-grey-100 rounded-lg flex items-center justify-center">
              <p className="text-fortrix-navy/50 font-regular">Diagram: Draw config → validator → discrepancy alert</p>
            </div>
          </div>
        </div>
      </Section>
      </>
    
  );
}

