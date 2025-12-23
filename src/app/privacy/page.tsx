import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Fortrix Systems',
  description: 'Privacy policy for Fortrix Systems Inc. outlining how we manage data and interactions across our website and digital properties.',
  alternates: {
    canonical: '/privacy',
  },
};

const privacyData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Privacy Policy - Fortrix Systems',
  description: 'Privacy policy for Fortrix Systems Inc.',
};

export default function Privacy() {
  return (
    <>
      <StructuredData data={privacyData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Privacy Policy"
          subtitle=""
          dark={true}
        />
      </Section>

      {/* Policy Content */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              At Fortrix Systems Inc., we are committed to maintaining the highest standards of transparency, privacy, and responsible data handling. Our website is designed to provide regulators, clients, and partners with clear, accurate information about our platform, products, and services.
            </p>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              This policy outlines how we manage data and interactions across our website and digital properties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">1. Information We Collect</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed mb-4">
              When you engage with us through our demo request form, contact forms, blog, or user portal, we may collect the following information:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Name</p>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Email address</p>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Phone number</p>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Organization name</p>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-1 h-6 bg-fortrix-teal mt-1"></div>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">Any other information you voluntarily provide</p>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We use this information to respond to inquiries, provide product access, and maintain business communication. We do not sell or share personal data with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">2. Use of Cookies</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our website uses cookies to improve functionality, analyze traffic, and provide a more secure browsing experience. You may choose to disable cookies via your browser settings; however, this may impact the performance of certain features.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">3. Data Security</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Security is foundational to our business. We apply appropriate technical and organizational measures to safeguard the information you share with us, including encryption, access controls, and secure infrastructure. If you have access to a user login portal, we encourage use of strong passwords and safe practices when accessing the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">4. Third-Party Services</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Our website may integrate with third-party tools (such as analytics platforms or embedded forms). These services may collect anonymous data under their own privacy terms. We only use services that align with our standards for data protection and reliability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">5. Your Rights</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              You may contact us at any time to request access to your information, correct inaccuracies, or withdraw consent for communication. We will respond promptly to all reasonable requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">6. Policy Updates</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We may update this policy from time to time to reflect changes in our practices or services. The most current version will always be posted on this page with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Contact Us</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              For questions about this policy or how your data is handled, please contact us at:{' '}
              <a href="mailto:hello@fortrixsystems.com" className="text-fortrix-teal hover:underline">
                hello@fortrixsystems.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

