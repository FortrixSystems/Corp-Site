import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Fortrix Systems',
  description: 'Get in touch to discuss oversight, audit readiness, and operational integrity across modern lottery environments. Contact Fortrix Systems for lottery operators, regulators, and oversight teams.',
  keywords: 'contact Fortrix, lottery oversight, audit readiness, operational integrity, pilot engagements, RFP, procurement, lottery operators, lottery regulators, oversight teams',
  alternates: {
    canonical: '/contact',
  },
};

const contactData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Fortrix Systems Inc.',
  description: 'Request a demo, discuss RFP requirements, or speak with our team.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Fortrix Systems Inc.',
    email: 'hello@fortrixsystems.com',
  },
};

export default function Contact() {
  return (
    <>
      <StructuredData data={contactData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Contact Fortrix Systems Inc."
          subtitle="Get in touch to discuss oversight, audit readiness, and operational integrity across modern lottery environments."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Whether you are a lottery operator, a lottery regulator, or part of an oversight team, we are happy to talk through your environment, priorities, and timelines. Early conversations are exploratory and focused on understanding what matters most, including where you want stronger traceability, simpler review workflows, or clearer controls across vendors and partners.
        </p>
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          We also support focused pilot engagements, designed to prove value quickly on a specific control, reconciliation, or oversight workflow before expanding.
        </p>
      </Section>

      {/* You might reach out section */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">You might reach out to us about:</h2>
          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Oversight and audit readiness planning
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                How Fortrix ICS fits alongside your current lottery platforms and providers
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Pilot opportunities and proof-of-value scopes
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Upcoming RFPs, procurement cycles, or regulatory reviews
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Platform capabilities and module options (Beacon, Ledger, Draw, Retail, Clarity, Connect, Insight)
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </Section>

      {/* Contact Information Section */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">Contact Fortrix Systems Inc.</h2>
          <div className="space-y-3 sm:space-4 text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            <p>1201 North Market Street</p>
            <p>Suite 111-O43</p>
            <p>Wilmington, DE 19801</p>
            <p className="mt-4">Ph: (302) 532-2803</p>
          </div>
        </div>
      </Section>
    </>
  );
}
