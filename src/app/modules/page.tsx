import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import ModuleIcon from '@/components/ModuleIcon';
import { StructuredData } from '@/components/StructuredData';
import { MODULE_CATALOG } from '@/lib/modules';
import { pageMetadata } from '@/lib/seo';
import { SITE_URL } from '@/lib/site-constants';

export const metadata: Metadata = pageMetadata({
  title: 'Fortrix Modules — Oversight Components',
  description:
    'Fortrix modules for lottery and gaming oversight—Beacon, Ledger, Draw, Retail, Digital, Connect, Clarity, and Regulatory Filing on one independent ICS platform.',
  path: '/modules',
  keywords:
    'Fortrix modules, lottery and gaming oversight, Beacon, Ledger, Draw, Retail, Digital, Connect, Clarity, Regulatory Filing, ICS modules',
});

const modulesCollectionData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fortrix ICS Modules',
  description: 'Comprehensive suite of integrated solutions for lottery control systems',
  itemListElement: MODULE_CATALOG.map((module, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: module.title,
    description: module.tagline,
    url: `${SITE_URL}${module.href}`,
  })),
};

export default function Modules() {
  return (
    <>
      <StructuredData data={modulesCollectionData} />
      <Section className="bg-fortrix-navy">
        <PageTitle title="Modules" subtitle="" dark={true} />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Each Fortrix module runs on the core platform and can be used on its own or together as part of a full oversight solution.
        </p>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          {MODULE_CATALOG.map((module) => (
            <div key={module.id} id={module.id}>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900 flex items-center gap-3">
                <ModuleIcon moduleId={module.id} variant="light" size={40} className="rounded-none" />
                <Link href={module.href} className="text-fortrix-teal hover:underline">
                  {module.title}
                </Link>
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg mb-4">
                {module.tagline}
              </p>
              <Link
                href={module.href}
                className="text-fortrix-teal hover:underline font-semibold text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mt-10 sm:mt-12">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular mb-6">
            Want to understand which modules make sense for your environment?
          </p>
          <Button href="/contact?interest=demo" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
