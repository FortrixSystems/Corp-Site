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
      <Section className="bg-fortrix-navy">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Our Purpose</h2>
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Lotteries operate in a high-trust environment where certainty is not optional.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix Systems exists to provide a neutral, verifiable layer that reconstructs truth across vendors, systems, and transactions.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Every component of Fortrix ICS reinforces clarity, traceability, and controlled workflows.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            In practice, Fortrix independently monitors activity across vendor systems and produces a defensible evidence trail for audits, investigations, and regulatory oversight.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix sits above vendor platforms as an independent layer, providing oversight, validation, and evidence across complex, multi-party systems.
          </p>
        </div>
      </Section>

      {/* Our Philosophy Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-white">Our Philosophy</h2>
          <div className="space-y-6 sm:space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Evidence over assumptions</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Every decision and validation is based on verifiable data, not assumptions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Verification over trust</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Systems verify and validate rather than assume correctness.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Independence by design</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Security and reliability are built into the architecture, not added as an afterthought.
                </p>
              </div>
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
              We built Fortrix because we&apos;ve seen firsthand how difficult it is to prove what actually happened once systems become distributed and vendor-heavy.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our founding team brings hands-on experience from inside regulated environments, not just around them. We&apos;ve worked directly with both regulators and operators, building and operating systems that had to stand up to audits, investigations, and real-world scrutiny, not just theoretical requirements.
            </p>
            <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  Experience building and running systems in highly regulated lottery environments, working day-to-day with regulators and operators
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  Firsthand involvement in audit readiness, incident response, and regulatory reviews, including moments where things went wrong and controls actually mattered
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  Practical experience navigating complex, multi-vendor lottery ecosystems, where accountability, evidence, and system boundaries are critical
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  Work delivered across jurisdictions in Canada, the United States, Europe, and South America, adapting to different regulatory models and oversight expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
