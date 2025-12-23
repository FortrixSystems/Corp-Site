import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StructuredData, organizationData } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fortrix Systems Inc. - Independent Truth for Lottery Systems",
    template: "%s | Fortrix Systems",
  },
  description: "Fortrix Systems provides lotteries and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data. Independent oversight for regulated lottery environments.",
  metadataBase: new URL('https://fortrixsystems.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4M0YNE0XE0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4M0YNE0XE0');
          `}
        </Script>
        <StructuredData data={organizationData} />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

