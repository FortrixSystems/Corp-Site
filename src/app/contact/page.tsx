import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  HQ_ADDRESS,
  LEGAL_ENTITY_NAME,
  LINKEDIN_COMPANY_URL,
  SITE_DISPLAY_NAME,
  US_ADDRESS,
  type ContactTopic,
} from '@/lib/site-constants';
import ContactForm from './ContactForm';
import TrackedAnchor from '@/components/TrackedAnchor';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Contact Fortrix Systems about lottery and gaming oversight, audit readiness, pilot engagements, RFPs, and demo requests for operators and regulators.',
  path: '/contact',
  keywords:
    'contact Fortrix, lottery oversight, gaming oversight, audit readiness, demo request, pilot engagement, RFP, procurement',
});

const contactData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE_DISPLAY_NAME}`,
  description: 'Request a demo, discuss RFP requirements, or speak with our team.',
  mainEntity: {
    '@type': 'Organization',
    name: LEGAL_ENTITY_NAME,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
  },
};

const DEMO_TOPIC: ContactTopic = 'Request a demo';

function resolveDefaultTopic(interest?: string): ContactTopic {
  if (interest === 'demo') {
    return DEMO_TOPIC;
  }
  return 'General inquiry';
}

export default function Contact({
  searchParams,
}: {
  searchParams?: { interest?: string };
}) {
  const defaultTopic = resolveDefaultTopic(searchParams?.interest);

  return (
    <>
      <StructuredData data={contactData} />
      <Section className="bg-fortrix-navy">
        <PageTitle
          title={`Contact ${LEGAL_ENTITY_NAME}`}
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

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">You might reach out to us about:</h2>
          <div className="space-y-4 sm:space-y-5">
            {[
              'Oversight and audit readiness planning',
              'How Fortrix ICS fits alongside your current lottery platforms and providers',
              'Pilot opportunities and proof-of-value scopes',
              'Upcoming RFPs, procurement cycles, or regulatory reviews',
              'Platform capabilities and module options (Beacon, Ledger, Draw, Retail, Digital, Connect, Clarity, Regulatory Filing)',
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-2xl">
          <ContactForm defaultTopic={defaultTopic} />
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            Contact {LEGAL_ENTITY_NAME}
          </h2>
          <div className="space-y-6 text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
            <p>
              Phone:{' '}
              <TrackedAnchor href={CONTACT_PHONE_TEL} className="text-fortrix-teal hover:underline">
                {CONTACT_PHONE}
              </TrackedAnchor>
              {' · '}
              <TrackedAnchor href={CONTACT_MAILTO} className="text-fortrix-teal hover:underline">
                {CONTACT_EMAIL}
              </TrackedAnchor>
              {' · '}
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fortrix-teal hover:underline"
              >
                LinkedIn
              </a>
            </p>
            <div>
              <p className="font-semibold text-fortrix-grey-900">{HQ_ADDRESS.label}</p>
              {HQ_ADDRESS.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div>
              <p className="font-semibold text-fortrix-grey-900">{US_ADDRESS.label}</p>
              {US_ADDRESS.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
