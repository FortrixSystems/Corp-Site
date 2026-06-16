import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import TrackedAnchor from '@/components/TrackedAnchor';
import { CONTACT_EMAIL, CONTACT_MAILTO, LEGAL_ENTITY_NAME, PRIVACY_EFFECTIVE_DATE, SITE_DISPLAY_NAME } from '@/lib/site-constants';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${LEGAL_ENTITY_NAME} handles website data, cookies, contact forms, and Work with Us applications. Effective ${PRIVACY_EFFECTIVE_DATE}.`,
  path: '/privacy',
});

const privacyData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Privacy Policy - ${SITE_DISPLAY_NAME}`,
  description: `Privacy policy for ${LEGAL_ENTITY_NAME}.`,
};

export default function Privacy() {
  return (
    <>
      <StructuredData data={privacyData} />
      <Section className="bg-fortrix-navy">
        <PageTitle
          title="Privacy Policy"
          subtitle={`Effective date: ${PRIVACY_EFFECTIVE_DATE}`}
          dark={true}
        />
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              At {LEGAL_ENTITY_NAME}, we are committed to maintaining the highest standards of transparency, privacy, and responsible data handling. Our website is designed to provide regulators, clients, and partners with clear, accurate information about our platform, products, and services.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              This policy outlines how we manage data and interactions across our website and digital properties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">1. Information We Collect</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              When you engage with us through our demo request form, contact forms, Work with us application, blog, or user portal, we may collect the following information:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Name',
                'Email address',
                'Phone number',
                'Organization name',
                'Interest or topic (for example, demo requests)',
                'Résumé or CV and related application materials submitted through Work with us',
                'Any other information you voluntarily provide',
              ].map((item) => (
                <li key={item} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                  <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We use this information to respond to inquiries, evaluate employment applications, provide product access, and maintain business communication. We do not sell or share personal data with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">2. Employment Applications</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              If you apply through our Work with us form, we collect the information you submit — including your résumé, contact details, and any supporting materials — to assess your application and communicate with you about opportunities at {LEGAL_ENTITY_NAME}.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              As a Canadian entity, we handle applicant personal information in accordance with applicable privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA). Application materials are used only for recruitment purposes, accessed by authorized personnel, and retained only as long as needed for the hiring process or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">3. Use of Cookies</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our website uses cookies to improve functionality, analyze traffic, and provide a more secure browsing experience. You may choose to disable cookies via your browser settings; however, this may impact the performance of certain features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">4. Data Security</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Security is foundational to our business. We apply appropriate technical and organizational measures to safeguard the information you share with us, including encryption, access controls, and secure infrastructure. If you have access to a user login portal, we encourage use of strong passwords and safe practices when accessing the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">5. Third-Party Services</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our website may integrate with third-party tools (such as analytics platforms or embedded forms). These services may collect anonymous data under their own privacy terms. We only use services that align with our standards for data protection and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">6. Your Rights</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              You may contact us at any time to request access to your information, correct inaccuracies, or withdraw consent for communication. We will respond promptly to all reasonable requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">7. Policy Updates</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We may update this policy from time to time to reflect changes in our practices or services. The most current version will always be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Contact Us</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              For questions about this policy or how your data is handled, please contact us at:{' '}
              <TrackedAnchor href={CONTACT_MAILTO} className="text-fortrix-teal hover:underline">
                {CONTACT_EMAIL}
              </TrackedAnchor>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
