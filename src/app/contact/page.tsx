import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Fortrix Systems',
  description: 'Get in touch to discuss oversight, audit readiness, or regulatory requirements across complex lottery environments. Contact Fortrix Systems for independent oversight solutions.',
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
          subtitle="Get in touch to discuss oversight, audit readiness, or regulatory requirements across complex lottery environments."
          dark={true}
        />
        <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular mb-8 sm:mb-10 max-w-3xl leading-relaxed">
          Whether you&apos;re a regulator, operator, or oversight body, we&apos;re happy to talk through your environment, requirements, or upcoming audits. Initial conversations are exploratory and focused on understanding your needs.
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
                Oversight and audit readiness questions
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Understanding how Fortrix fits your lottery environment
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                RFPs, procurement, or regulatory reviews
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
              <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                Platform or module capabilities
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

      {/* Closing Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Fortrix works with organizations that value clarity, accountability, and independent oversight.
          </p>
        </div>
      </Section>
    </>
  );
}
