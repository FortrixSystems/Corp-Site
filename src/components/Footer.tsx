import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="border-t border-fortrix-charcoal/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="mb-3">
              <Logo variant="horizontal" className="h-8" />
            </div>
            <p className="text-sm text-fortrix-navy font-regular max-w-md">
              Independent control and oversight for regulated lottery environments
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm">
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

