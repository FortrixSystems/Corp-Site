import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Fortrix Draw - Draw Configuration & Validation',
  description: 'Controls draw configuration, validation, and discrepancy detection. Ensures authorized draw procedures, validates winning numbers, and generates clear audit documentation.',
  keywords: 'draw validation, draw configuration, discrepancy analysis, draw oversight, dual-approval workflows, Fortrix Draw, draw integrity, winning number validation',
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
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <ModuleIcon moduleId="draw" variant="dark" size={56} className="rounded-none" />
          <PageTitle 
            title="Fortrix Draw"
            subtitle="Secure draw configuration, validation, and discrepancy analysis."
            dark={true}
          />
        </div>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          From draw setup to winning number validation, Fortrix Draw controls procedures, enforces dual-approval workflows, with a focus on reducing operational risk.
        </p>
      </Section>

      {/* Purpose Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Purpose</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            From draw setup to winning number validation, Fortrix Draw controls procedures, enforces dual-approval workflows, with a focus on reducing operational risk.
          </p>
        </div>
      </Section>

      {/* Configuration Drift Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Configuration Drift</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Identifies configuration drift and unapproved changes to draw procedures.
          </p>
        </div>
      </Section>
      </>
    
  );
}

