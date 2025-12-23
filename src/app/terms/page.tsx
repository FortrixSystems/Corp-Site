import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Terms of Use | Fortrix Systems',
  description: 'Terms of Use for Fortrix Systems Inc. website outlining acceptable use, intellectual property, and legal terms.',
  alternates: {
    canonical: '/terms',
  },
};

const termsData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Use - Fortrix Systems',
  description: 'Terms of Use for Fortrix Systems Inc.',
};

export default function Terms() {
  return (
    <>
      <StructuredData data={termsData} />
      {/* Hero Section */}
      <Section className="bg-fortrix-navy">
        <PageTitle 
          title="Terms of Use"
          subtitle=""
          dark={true}
        />
      </Section>

      {/* Terms Content */}
      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <div>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Welcome to the Fortrix Systems Inc. website (&quot;Fortrix,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using this website, you agree to the following Terms of Use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Use of Website</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              This website is provided for informational purposes only. You may use it for lawful business purposes and may not misuse, interfere with, or attempt to gain unauthorized access to the site or its systems.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Intellectual Property</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              All content on this website, including text, graphics, logos, product names, and design elements, is the property of Fortrix Systems Inc. or its licensors and is protected by applicable intellectual property laws. No content may be copied, reproduced, or used without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">No Professional Advice</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Information provided on this website does not constitute legal, regulatory, security, or technical advice. Decisions should not be made solely based on website content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Third-Party Links</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              This website may reference or link to third-party sites. Fortrix is not responsible for the content, security, or practices of those external sites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Limitation of Liability</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              To the fullest extent permitted by law, Fortrix Systems Inc. shall not be liable for any damages arising from your use of, or inability to use, this website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Changes</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              We may update these Terms of Use from time to time. Continued use of the website constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Governing Law</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              These Terms are governed by the laws of the State of Delaware, without regard to conflict-of-law principles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Contact</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Questions regarding these Terms may be directed to:{' '}
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

