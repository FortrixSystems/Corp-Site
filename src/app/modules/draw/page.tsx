import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import ModuleIcon from '@/components/ModuleIcon';
import Card from '@/components/Card';
import { StructuredData } from '@/components/StructuredData';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Draw — Draw Configuration & Validation',
  description:
    'Fortrix Draw controls draw configuration and validation, detects discrepancies, and produces audit-ready documentation for regulated draw operations.',
  path: '/modules/draw',
  keywords:
    'draw validation, draw configuration, discrepancy analysis, draw integrity, Fortrix Draw, winning number validation',
});

const drawProductData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Fortrix Draw',
  description: 'Draw configuration and validation module that controls draw procedures, validates winning numbers, and detects discrepancies.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  brand: {
    '@type': 'Brand',
    name: 'Fortrix Systems',
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

      {/* Configuration Drift Section */}
      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Configuration Drift</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Identifies configuration drift and unapproved changes to draw procedures.
          </p>
        </div>
      </Section>
      </>
    
  );
}

