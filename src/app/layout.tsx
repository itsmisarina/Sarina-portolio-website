import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Footer } from "@/components/footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { brand } from "@/lib/data";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} | AI Marketing Expert & Consultant`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Digital Sarina helps brands use AI marketing, automation, content systems, and consulting to grow faster with clarity.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    title: `${brand.name} | AI Marketing Expert & Consultant`,
    description:
      "Premium AI marketing consulting for strategy, automation, content, SEO, and business growth.",
    url: siteUrl,
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | AI Marketing Expert & Consultant`,
    description: "AI marketing strategy, automation, and consulting for modern brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  founder: brand.owner,
  email: brand.email,
  telephone: brand.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  areaServed: "Worldwide",
  serviceType: "AI Marketing Consulting",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
