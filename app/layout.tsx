import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const siteUrl = "https://nathelevate.com";
const siteName = "Nathe";
const defaultTitle = "Nathe | Software Developer, AI Builder & Founder";
const defaultDescription =
  "Nathe is the founder and builder hub for Nathan Ayling — documenting software builds, AI products, sports intelligence platforms, Aicrono, Evo Sports Intelligence and the process of shipping useful products.";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070D",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s · Nathe",
  },
  description: defaultDescription,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Nathe",
    "Nathelevate",
    "Nathan Ayling",
    "software developer",
    "AI builder",
    "SaaS founder",
    "sports intelligence",
    "Evo Sports Intelligence",
    "Aicrono",
    "RaceEvo",
    "FootyEvo",
    "OddsEvo",
    "EvoCore",
    "AI products",
    "build in public",
    "developer founder",
    "Next.js developer",
  ],
  authors: [{ name: "Nathan Ayling", url: siteUrl }],
  creator: "Nathan Ayling",
  publisher: "Nathe",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathe — Software Developer, AI Builder and Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nathelevate",
    creator: "@nathelevate",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        publisher: { "@id": `${siteUrl}/#person` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Nathan Ayling",
        alternateName: ["Nathe", "Nathelevate"],
        url: siteUrl,
        sameAs: [
          "https://www.youtube.com/@nathelevate",
          "https://www.facebook.com/nathelevate/",
          "https://www.instagram.com/nathelevate",
          "https://twitter.com/nathelevate",
          "https://www.tiktok.com/@nathelevate",
          "https://evosportsintelligence.com",
          "https://aicrono.com",
          "https://theseekshow.com",
          "https://thedoitshow.com",
        ],
        jobTitle: "Full Stack Developer and Founder",
        description:
          "Nathan Ayling is a full-stack developer and founder building AI-powered software, sports intelligence platforms and media brands.",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        sameAs: [
          "https://www.youtube.com/@nathelevate",
          "https://www.facebook.com/nathelevate/",
          "https://www.instagram.com/nathelevate",
          "https://twitter.com/nathelevate",
          "https://www.tiktok.com/@nathelevate",
        ],
      },
    ],
  };

  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PG4DTZJTM6"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PG4DTZJTM6');
          `}
        </Script>

        <Script
          id="nathe-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="pointer-events-none fixed inset-0 bg-radial-fade" />

        <Nav />

        <main id="main-content" className="relative">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}