import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import Card from '@/components/Card';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contact Fortrix Systems Inc.',
  description: 'Request a demo, discuss RFP requirements, or speak with our team. Contact Fortrix Systems Inc. for enterprise lottery control solutions.',
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Contact Fortrix Systems Inc."
          subtitle="Request a demo, discuss RFP requirements, or speak with our team."
          dark={true}
        />
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-fortrix-grey-100">
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
                <label htmlFor="jurisdiction" className="block text-sm font-semibold text-fortrix-grey-900 mb-2">
                  Jurisdiction
                </label>
                <input
                  type="text"
                  id="jurisdiction"
                  name="jurisdiction"
                  className="w-full px-4 py-3 border border-fortrix-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fortrix-teal focus:border-transparent"
                  placeholder="Your jurisdiction"
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
      <
  );
}
