import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData, organizationData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About | Fortrix Systems',
  description: 'An independent control and oversight platform for regulated lottery environments. Fortrix provides verification, evidence, and independent oversight across complex lottery systems.',
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  return (
    <>
      <StructuredData data={organizationData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Independent truth for lottery systems."
          subtitle="Clarity at scale. Integrity by design."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Fortrix Systems provides lotteries and regulators with an independent control layer that strengthens traceability, audit readiness, and day-to-day oversight across platforms, vendors, and partners.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Request Demo
          </Button>
        </div>
      </Section>

      {/* Our Purpose Section */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Purpose</h2>
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Lotteries operate in a high-trust environment where certainty is not optional.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix Systems exists to make oversight simpler and more reliable in complex, multi-party environments. Fortrix ICS, our Internal Control System, runs alongside existing vendor platforms to reconcile records across the ecosystem, support consistent outcomes, and shorten the time it takes to resolve issues, without disrupting operations.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            As programs scale across more systems, providers, and channels, we help teams maintain clear traceability from source to outcome, support audits and reviews with confidence, and sustain ongoing oversight.
          </p>
        </div>
      </Section>

      {/* Our Philosophy Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Philosophy</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Certainty through validation</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                We design controls that are repeatable, consistent, and straightforward to assess.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Independent by design</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                We reduce reliance on any single vendor's reporting by providing a neutral layer of assurance.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Clarity at scale</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                As complexity grows, we keep oversight simple, searchable, and dependable.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Team Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Team</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We built Fortrix because we have seen how difficult it becomes to maintain a shared record once environments expand across multiple providers and systems.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our founding team has worked inside regulated environments with both operators and oversight bodies. We understand what it takes to perform under audits, reviews, incident response, and real-world scrutiny, and we build accordingly.
            </p>
          </div>
        </div>
      </Section>

      {/* Track Record Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Track Record</h2>
          <div className="space-y-4 sm:space-y-5">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Across regulated lottery environments, our team has worked side-by-side with operators and oversight teams to build and run systems that must hold up under review.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              That includes audit readiness, incident response, and regulatory examinations where traceability and consistency are non-negotiable.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We have delivered in multi-provider ecosystems where responsibilities, data, and reporting are shared across vendors and partners, often across multiple channels and stakeholders.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our work spans jurisdictions in Canada, the United States, Europe, and South America.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
