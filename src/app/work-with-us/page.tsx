import type { Metadata } from 'next';
import Section from '@/components/Section';
import PageTitle from '@/components/PageTitle';
import { StructuredData } from '@/components/StructuredData';
import WorkWithUsForm from './WorkWithUsForm';

export const metadata: Metadata = {
  title: 'Work with us | Fortrix Systems',
  description:
    'Fortrix builds independent control and oversight technology for regulated lottery and gaming. We value clarity, accountability, integrity, and thoughtful collaboration.',
  keywords:
    'Fortrix careers, work at Fortrix, lottery technology jobs, oversight platform, regulated environments, compliance, audit, engineering',
  alternates: {
    canonical: '/work-with-us',
  },
};

const pageData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Work with us — Fortrix Systems',
  description:
    'Independent control and oversight for regulated lottery and gaming. Careers and introductions at Fortrix Systems.',
};

const VALUES: { heading: string; text: string }[] = [
  {
    heading: 'Humanity',
    text: 'We treat people with respect, empathy, and professionalism. Strong standards and decency belong together.',
  },
  {
    heading: 'Integrity',
    text: 'We aim to do the right thing, communicate honestly, and build work that can stand up to scrutiny.',
  },
  {
    heading: 'Clarity',
    text: 'We bring structure to complexity and communicate in a way that is direct, useful, and easy to understand.',
  },
  {
    heading: 'Purpose',
    text: 'We believe better systems can support better outcomes, and we want our work to contribute in a meaningful way.',
  },
  {
    heading: 'Ownership',
    text: 'We take responsibility for our work, pay attention to detail, and follow through.',
  },
  {
    heading: 'Collaboration',
    text: 'We value good thinking from different disciplines and know strong outcomes are built together.',
  },
];

const heroBodyClass =
  'text-base sm:text-lg text-fortrix-grey-300 font-regular max-w-3xl leading-relaxed';

export default function WorkWithUsPage() {
  return (
    <>
      <StructuredData data={pageData} />

      <Section className="bg-fortrix-navy">
        <PageTitle
          title="Work with us"
          subtitle="We build independent control and oversight technology for regulated lottery and gaming environments. Our work is grounded in clarity, accountability, and trust."
          dark
        />
        <div className="space-y-6 sm:space-y-7 max-w-3xl">
          <p className={heroBodyClass}>
            We care about how we work with people as much as the work itself. We value
            integrity, thoughtful collaboration, and treating others with humanity. We are
            interested in people who bring good judgment, curiosity, and a genuine desire
            to build something meaningful.
          </p>
          <p className={heroBodyClass}>
            If your background aligns with our work across areas such as regulated systems,
            compliance, audit, engineering, product, data, or lottery operations, you are
            welcome to share your resume or LinkedIn profile for future consideration.
          </p>
        </div>
      </Section>

      <Section className="bg-fortrix-grey-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8 sm:mb-10 text-fortrix-grey-900">
            What we value
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {VALUES.map((item) => (
              <div key={item.heading}>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold mb-3 text-fortrix-grey-900">
                  {item.heading}
                </h3>
                <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 sm:mb-8 text-fortrix-grey-900">
            Introduce yourself
          </h2>
          <div className="max-w-2xl mx-auto space-y-8 sm:space-y-10">
            <p className="text-base sm:text-lg text-fortrix-grey-700 font-regular leading-relaxed">
              Share your background, resume, or LinkedIn profile for future consideration. We
              will connect if there&apos;s a fit!
            </p>
            <WorkWithUsForm />
          </div>
        </div>
      </Section>
    </>
  );
}
