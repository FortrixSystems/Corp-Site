import Link from 'next/link';
import Logo from './Logo';
import { LEGAL_ENTITY_NAME, LINKEDIN_COMPANY_URL } from '@/lib/site-constants';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-fortrix-charcoal/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="mb-3">
              <Logo variant="horizontal" className="h-8" />
            </div>
            <p className="text-sm text-fortrix-navy font-regular max-w-md mb-4">
              Independent control and oversight for regulated lottery and gaming environments
            </p>
            <a
              href={LINKEDIN_COMPANY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fortrix-navy hover:text-fortrix-charcoal font-regular transition-colors mb-6"
              aria-label="Fortrix Systems on LinkedIn (opens in a new tab)"
            >
              <LinkedInIcon className="h-5 w-5" />
              LinkedIn
            </a>
            <p className="text-xs text-fortrix-grey-700">
              © {year} {LEGAL_ENTITY_NAME}. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm w-full md:w-auto justify-center md:justify-end">
            <Link
              href="/privacy"
              className="text-fortrix-navy hover:text-fortrix-charcoal font-regular transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-fortrix-navy hover:text-fortrix-charcoal font-regular transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/work-with-us"
              className="text-fortrix-navy hover:text-fortrix-charcoal font-regular transition-colors"
            >
              Work with us
            </Link>
            <Link
              href="/contact"
              className="text-fortrix-navy hover:text-fortrix-charcoal font-regular transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
