import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Modules | Fortrix Systems',
  description: 'Each Fortrix module runs on the core platform and can be used independently or together. Beacon, Ledger, Draw, Retail, Connect, and Insight for comprehensive oversight of lottery environments.',
  alternates: {
    canonical: '/modules',
  },
};

const modules = [
  {
    id: 'beacon',
    title: 'Fortrix Beacon',
    description: 'Monitors system activity and flags unusual behavior.',
    bullets: [
      'Helps surface issues early',
      'Works independently of vendor systems',
    ],
    href: '/modules/beacon',
  },
  {
    id: 'ledger',
    title: 'Fortrix Ledger',
    description: 'Creates a tamper-evident record of system activity.',
    bullets: [
      'Supports audits and investigations',
      'Preserves evidence over time',
    ],
    href: '/modules/ledger',
  },
  {
    id: 'draw',
    title: 'Fortrix Draw',
    description: 'Confirms that draw processes ran correctly and fairly.',
    bullets: [
      'Validates outcomes against rules',
      'Produces defensible post-draw evidence',
    ],
    href: '/modules/draw',
  },
  {
    id: 'retail',
    title: 'Fortrix Retail',
    description: 'Provides visibility into retail terminals and networks.',
    bullets: [
      'Monitors terminal activity and system behavior',
      'Complements existing retail systems rather than replacing them',
    ],
    href: '/modules/retail',
  },
  {
    id: 'connect',
    title: 'Fortrix Connect',
    description: 'Moves and normalizes data across vendor systems.',
    bullets: [
      'Enables cross-system visibility',
      'Supports modular deployments',
    ],
    href: '/modules/connect',
  },
  {
    id: 'insight',
    title: 'Fortrix Insight',
    description: 'Gives regulators and operators a clear view into what happened.',
    bullets: [
      'Supports audit and investigation workflows',
      'Designed for regulated environments',
    ],
    href: '/modules/insight',
  },
];

const modulesCollectionData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fortrix ICS Modules',
  description: 'Comprehensive suite of integrated solutions for lottery control systems',
  itemListElement: modules.map((module, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: module.title,
    description: module.description,
    url: `https://fortrixsystems.com${module.href}`,
  })),
};

export default function Modules() {
  return (
    <>
      <StructuredData data={modulesCollectionData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Modules"
          subtitle=""
          dark={true}
        />
        <div className="max-w-4xl mx-auto mt-6">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Each Fortrix module runs on the core platform and can be used on its own or together as part of a full oversight solution.
          </p>
        </div>
      </Section>

      {/* Modules Grid */}
      <Section className="bg-fortrix-grey-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {modules.map((module) => (
            <div key={module.id} id={module.id} className="bg-white border border-fortrix-grey-300 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-heading font-semibold mb-3 text-fortrix-grey-900">{module.title}</h3>
              <p className="text-fortrix-grey-700 font-regular text-sm sm:text-base mb-4">
                {module.description}
              </p>
              <div className="space-y-3 sm:space-y-4 mb-4">
                {module.bullets.map((bullet, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                    <p className="text-sm sm:text-base text-fortrix-grey-700 font-regular leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href={module.href}
                className="text-fortrix-teal hover:underline font-semibold text-sm"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-10 sm:mt-12 text-center">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6">
            Want to understand which modules make sense for your environment?
          </p>
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

