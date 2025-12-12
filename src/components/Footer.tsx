import Link from 'next/link';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Platform', href: '/platform' },
    { name: 'Contact', href: '/contact' },
  ],
  solutions: [
    { name: 'Lotteries', href: '/solutions/lotteries' },
    { name: 'Regulators', href: '/solutions/regulators' },
    { name: 'Vendors', href: '/solutions/vendors' },
  ],
  legal: [
    { name: 'Trust & Security', href: '/trust-security' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-fortrix-charcoal/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1">
            <h3 className="text-sm font-heading font-semibold text-fortrix-charcoal mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-fortrix-navy hover:text-fortrix-charcoal font-regular">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-heading font-semibold text-fortrix-charcoal mb-3 sm:mb-4">Solutions</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-fortrix-navy hover:text-fortrix-charcoal font-regular">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-heading font-semibold text-fortrix-charcoal mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-fortrix-navy hover:text-fortrix-charcoal font-regular">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
            <p className="text-sm text-fortrix-navy font-regular">
              © {new Date().getFullYear()} Fortrix Systems Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

