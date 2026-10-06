import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { meta } from "@/lib/content";

const font = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hilfshipping.com"),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    images: [{ url: "/images/hero-poster.jpg" }],
  },
};
export const viewport: Viewport = { themeColor: "#06043F" };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Hilf Shipping",
      url: "https://hilfshipping.com",
      logo: "https://hilfshipping.com/images/hilp-shipping-logo.png",
      email: "chartering@hilfshipping.com",
    },
    {
      "@type": "LocalBusiness",
      name: "Hilf Shipping",
      description: meta.description,
      email: "chartering@hilfshipping.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Communication Office #2007, Level 20, Tamani Arts Building, Al Asayel Street",
        addressLocality: "Business Bay, Dubai",
        addressCountry: "AE",
      },
    },
  ],
};

const boot = `document.documentElement.setAttribute('data-js','');setTimeout(function(){if(!window.__hydrated)document.documentElement.removeAttribute('data-js')},4000);try{var n=performance.getEntriesByType('navigation')[0];if(n&&n.type==='back_forward')document.documentElement.setAttribute('data-noboot','')}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
