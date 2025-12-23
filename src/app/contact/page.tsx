import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { StructuredData } from '@/components/StructuredData';

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
    email: 'info@fortrixsystems.com',
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
      </Section>

      {/* Introduction Section */}
      <Section className="bg-fortrix-navy">
        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-fortrix-grey-300 font-regular leading-relaxed">
            Whether you&apos;re a regulator, operator, or oversight body, we&apos;re happy to talk through your environment, requirements, or upcoming audits. Initial conversations are exploratory and focused on understanding your needs.
          </p>
        </div>
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
          <Card>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <Button type="submit" size="lg" className="w-full">
                  Request Demo
                </Button>
              </div>
            </form>
          </Card>
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
