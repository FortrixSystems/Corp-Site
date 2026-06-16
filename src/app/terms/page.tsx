import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import TrackedAnchor from '@/components/TrackedAnchor';
import { CONTACT_EMAIL, CONTACT_MAILTO, LEGAL_ENTITY_NAME, SITE_DISPLAY_NAME } from '@/lib/site-constants';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Use',
  description: `Terms of Use for the ${LEGAL_ENTITY_NAME} website—acceptable use, intellectual property, governing law (BC and Delaware), and contact information.`,
  path: '/terms',
});

const termsData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `Terms of Use - ${SITE_DISPLAY_NAME}`,
  description: `Terms of Use for ${LEGAL_ENTITY_NAME}.`,
};

export default function Terms() {
  return (
    <>
      <StructuredData data={termsData} />
      <Section className="bg-fortrix-navy">
        <PageTitle title="Terms of Use" subtitle="" dark={true} />
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Welcome to the {LEGAL_ENTITY_NAME} website (&quot;Fortrix,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using this website, you agree to the following Terms of Use.
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
              All content on this website, including text, graphics, logos, product names, and design elements, is the property of {LEGAL_ENTITY_NAME} or its licensors and is protected by applicable intellectual property laws. No content may be copied, reproduced, or used without prior written permission.
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
              To the fullest extent permitted by law, {LEGAL_ENTITY_NAME} shall not be liable for any damages arising from your use of, or inability to use, this website.
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
              These Terms are governed by the laws of the Province of British Columbia, Canada, and the State of Delaware, United States, without regard to conflict-of-law principles. Where a matter relates to our Canadian head office or Canadian users, the laws of British Columbia apply to the extent not superseded by applicable federal law in Canada. Where a matter relates to our United States office or U.S. users, the laws of Delaware apply to the extent not superseded by applicable federal law in the United States.
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-fortrix-grey-900">Contact</h2>
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Questions regarding these Terms may be directed to:{' '}
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
