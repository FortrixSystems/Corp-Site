import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Modules | Fortrix Systems',
  description: 'Each Fortrix module runs on the core platform and can be used independently or together. Beacon, Ledger, Draw, Retail, Connect, and Insight for comprehensive oversight of lottery environments.',
  keywords: 'Fortrix modules, Beacon, Ledger, Draw, Retail, Connect, Insight, modular oversight, independent modules, lottery oversight modules, ICS modules',
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
      'Works alongside vendor systems',
    ],
    href: '/modules/beacon',
  },
  {
    id: 'ledger',
    title: 'Fortrix Ledger',
    description: 'Creates a tamper-evident record of system activity.',
    bullets: [
      'Supports audits and reviews',
    ],
    href: '/modules/ledger',
  },
  {
    id: 'draw',
    title: 'Fortrix Draw',
    description: 'Confirms that draw processes ran correctly and fairly.',
    bullets: [],
    href: '/modules/draw',
  },
  {
    id: 'retail',
    title: 'Fortrix Retail',
    description: 'Provides visibility into retail terminals and networks.',
    bullets: [],
    href: '/modules/retail',
  },
  {
    id: 'connect',
    title: 'Fortrix Connect',
    description: 'Moves and normalizes data across vendor systems.',
    bullets: [],
    href: '/modules/connect',
  },
  {
    id: 'insight',
    title: 'Fortrix Insight',
    description: 'Gives regulators and operators a clear view into what happened.',
    bullets: [
      'Supports audit and review workflows',
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
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Each Fortrix module runs on the core platform and can be used on its own or together as part of a full oversight solution.
        </p>
      </Section>

      {/* Modules List */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-10">
          {modules.map((module) => (
            <div key={module.id} id={module.id}>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId={module.id} variant="light" size={40} className="rounded-none" />
                <Link href={module.href} className="text-fortrix-teal hover:underline">
                  {module.title}
                </Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-4">
                {module.description}
              </p>
              {module.bullets.length > 0 && (
                <div className="space-y-3 sm:space-4 mb-4">
                  {module.bullets.map((bullet, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                      <p className="text-sm sm:text-base text-fortrix-grey-700 font-regular leading-relaxed">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <Link
                href={module.href}
                className="text-fortrix-teal hover:underline font-semibold text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto mt-10 sm:mt-12 text-center">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6">
            Want to understand which modules make sense for your environment?
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

