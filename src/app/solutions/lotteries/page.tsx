import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Lottery Solutions | Fortrix Systems',
  description: 'Independent oversight, verification, and evidence for modern lottery environments. Solutions for regulators and operators across complex lottery systems.',
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
          title="Lottery Solutions"
          subtitle="Independent oversight, verification, and evidence for modern lottery environments."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix provides lottery solutions designed for both regulators and operators. We sit alongside vendor platforms as an independent control layer, monitoring activity, validating outcomes, and preserving records across complex lottery systems.
        </p>
      </Section>

      {/* Top-of-page Framing */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            These solutions are delivered through the Fortrix platform and its modular components, including <Link href="/modules/beacon" className="text-fortrix-teal hover:underline">Beacon</Link>, <Link href="/modules/ledger" className="text-fortrix-teal hover:underline">Ledger</Link>, <Link href="/modules/draw" className="text-fortrix-teal hover:underline">Draw</Link>, <Link href="/modules/retail" className="text-fortrix-teal hover:underline">Retail</Link>, <Link href="/modules/connect" className="text-fortrix-teal hover:underline">Connect</Link>, and <Link href="/modules/insight" className="text-fortrix-teal hover:underline">Insight</Link>.
          </p>
        </div>
      </Section>

      {/* For Operators Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">For Operators</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Early detection of issues, cross-system visibility, and faster, verifiable responses.
          </p>
        </div>
      </Section>

      {/* For Regulators Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">For Regulators</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Independent visibility, audit-ready evidence, and defensible oversight across lottery environments.
          </p>
        </div>
      </Section>

      {/* Compliance Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Compliance</h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Lotteries operate under intense public scrutiny. Fortrix provides provable, regulator-grade transparency, so you are always prepared.
          </p>
        </div>
      </Section>

      {/* Main Content Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Designed for Regulated Environments</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Purpose-built for the unique requirements of lottery operations, with support for draw oversight, configuration controls, reconciliation, and approval workflows.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">Compliance (Without the Complexity)</h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                From audit prep to day-to-day oversight, Fortrix automates documentation and evidence capture, giving your team more time to focus on performance and risk management.
              </p>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-6">
              Fortrix supports lotteries that need confidence, transparency, and independent oversight across their systems.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
