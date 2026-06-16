import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';
import { MODULE_CATALOG } from '@/lib/modules';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Gaming Solutions — Regulated ICS Oversight',
  description:
    'Independent oversight, reconciliation, and control assurance for regulated gaming and iGaming. ICS across CGS vendors for operators and regulators.',
  path: '/solutions/gaming',
  keywords:
    'gaming solutions, iGaming, ICS, CMS, CGS, audit readiness, gaming operators, gaming regulators, reconciliation',
});

const gamingProductData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fortrix ICS/CMS Solutions for Gaming',
  description:
    'Independent oversight, reconciliation, and control assurance for regulated gaming environments across traditional, digital, and iGaming operations.',
  provider: {
    '@type': 'Organization',
    name: 'Fortrix Systems',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Gaming Organizations',
  },
};

export default function Gaming() {
  return (
    <>
      <StructuredData data={gamingProductData} />
      <Section className="bg-fortrix-navy">
        <PageTitle
          title="Gaming Solutions"
          subtitle="Independent oversight, reconciliation, and control assurance for regulated gaming environments."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix provides gaming solutions for operators and regulators across traditional gaming,
          digital gaming, and iGaming environments. We operate alongside existing platforms as an
          independent Internal Control System / Central Monitoring System (ICS/CMS), working across
          any CGS vendor to reconcile records across systems, channels, and partners. This gives
          organizations stronger reporting accuracy, better audit readiness, and greater confidence
          in day-to-day oversight across omnichannel gaming operations.
        </p>
        <div className="mb-12 sm:mb-16" aria-hidden="true" />
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            The Fortrix platform is modular, allowing operators and regulators to tailor the solution
            to their specific operational, compliance, and oversight requirements using{' '}
            {MODULE_CATALOG.map((module, index) => (
              <span key={module.id}>
                {index > 0 && (index === MODULE_CATALOG.length - 1 ? ', and ' : ', ')}
                <Link href={module.href} className="text-fortrix-teal hover:underline">
                  {module.title}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            For Gaming Operators
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix helps operators detect issues earlier, improve visibility across vendors and
            channels, and resolve exceptions faster with clear, defensible traceability across
            land-based, digital, and iGaming operations.
          </p>
        </div>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            For Gaming Regulators
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix helps regulators strengthen independent oversight with audit-ready evidence,
            clearer cross-system visibility, and greater confidence across gaming operations, CGS
            vendors, and partner ecosystems.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Built for Multi-Vendor Gaming Environments
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Gaming environments often depend on multiple vendors, platforms, and data sources.
            Fortrix is designed to work alongside any CGS vendor, helping organizations connect
            records across environments, identify discrepancies, reduce blind spots, and improve
            control visibility across complex omnichannel operations.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Compliance, AML, and Audit Readiness
          </h2>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Gaming environments operate under intense scrutiny, complex control requirements, and
            growing expectations around transparency. Fortrix is built to strengthen internal controls, support AML oversight, and simplify audit preparation through consistent traceability, standardized records, and review-ready outputs across systems, vendors, and channels.
          </p>
        </div>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <div className="space-y-8 sm:space-y-10 text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">
                Designed for Omnichannel Oversight
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                Purpose-built for gaming realities, Fortrix supports transactional oversight,
                reconciliation, exception management, control monitoring, approval workflows, and
                evidence management across land-based and digital operations.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 text-fortrix-grey-900">
                Confidence Without the Complexity
              </h3>
              <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
                From day-to-day controls to audit preparation, Fortrix reduces manual effort by
                organizing control activity, preserving supporting records, and helping teams
                surface and resolve exceptions efficiently.
              </p>
            </div>

            <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
              Fortrix supports gaming organizations that need confidence, transparency, and
              independent oversight across their systems, vendors, and partners.
            </p>
            <p className="text-fortrix-grey-700 font-regular text-base sm:text-lg">
              Contact us to learn how Fortrix can support oversight, reconciliation, AML visibility,
              and audit readiness across your gaming environment.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <Button href="/contact?interest=demo" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
