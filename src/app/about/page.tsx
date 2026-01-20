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
          title="Engineered for truth. Built for oversight."
          subtitle={
            <>
              An <Link href="/platform" className="text-fortrix-teal hover:underline">independent control and oversight platform</Link> for regulated lottery environments.
            </>
          }
          dark={true}
        />
      </Section>

      {/* Our Purpose Section */}
      <Section className="bg-white">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Purpose</h2>
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Lotteries operate in a high-trust environment where certainty is not optional.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix Systems delivers Fortrix ICS, our Internal Control System. It is an independent controls layer that reconciles activity across systems and partners, creating audit-ready reporting and faster issue resolution without disrupting operations.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Fortrix helps lotteries and regulators align records across integrated systems, keep clear traceability, and support audits, reviews, and ongoing oversight.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            In practice, Fortrix independently monitors activity across vendor systems and produces a defensible evidence trail for audits, investigations, and regulatory oversight.
          </p>
        </div>
      </Section>

      {/* Our Philosophy Section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-8 sm:mb-10">
            Fortrix sits above vendor platforms as an independent layer, providing oversight, validation, and evidence across complex, multi-party systems.
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Our Philosophy</h2>
          <div className="space-y-6 sm:space-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Evidence over assumptions</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Systems verify and validate to reduce ambiguity, support consistent outcomes, and simplify oversight.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Verification over trust</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Systems verify and validate to reduce ambiguity, support consistent outcomes, and simplify oversight.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">Independence by design</h3>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Systems verify and validate to reduce ambiguity, support consistent outcomes, and simplify oversight.
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
              We built Fortrix because we have seen how hard it is to establish a shared, verifiable record once environments become distributed across multiple providers and systems.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our founding team brings hands-on experience from inside regulated environments. We have worked with both regulators and operators, building and operating systems that must stand up to audits, reviews, and real-world scrutiny.
            </p>
          </div>
        </div>
      </Section>

      {/* Track Record Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Track Record</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Experience building and operating systems in regulated lottery environments, working day-to-day with regulators and operators
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                First hand involvement in audit readiness, incident response, and regulatory review.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Practical experience across multi-provider ecosystems
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Work delivered across jurisdictions in Canada, the United States, Europe, and South America
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
