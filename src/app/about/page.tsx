import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import { StructuredData, organizationData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'About Us - Engineered for Truth',
  description: 'Fortrix Systems exists to provide a neutral, verifiable layer that reconstructs truth across vendors, systems, and transactions. Evidence over opinion. Verification over assumption.',
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
          subtitle=""
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
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Evidence over opinion</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Every decision and validation is based on verifiable data, not assumptions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Verification over assumption</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Systems verify and validate rather than assume correctness.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Documentation over interpretation</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Clear, structured documentation enables objective analysis and audit.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2 text-white">Integrity engineered, not implied</h3>
                <p className="text-fortrix-grey-300 font-regular text-sm sm:text-base">
                  Security and reliability are built into the architecture, not added as an afterthought.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-fortrix-grey-100">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Team</h2>
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Founding team with experience in lottery operations, system integrations, internal controls, incident response, and regulatory oversight.
          </p>
          <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            Commitment to neutrality and vendor-agnostic architecture ensures independent oversight for jurisdictions.
          </p>
        </div>
      </Section>
    </>
  );
}
