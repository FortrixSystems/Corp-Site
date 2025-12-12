import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StructuredData, organizationData } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fortrix Systems Inc. - Independent Truth for Lottery Systems",
    template: "%s | Fortrix Systems Inc.",
  },
  description: "Fortrix Systems provides lotteries and regulators with a neutral control layer that verifies, reconciles, and validates mission-critical data.",
  metadataBase: new URL('https://fortrixsystems.com'),
  alternates: {
    canonical: '/',
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

