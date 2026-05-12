import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const siteUrl = "https://nathelevate.com";
const siteName = "Nathelevate";
const defaultTitle =
  "Nathelevate — AI Workflows, SaaS Builds & Online Income Experiments";
const defaultDescription =
  "Nathelevate is where developer Nathan Ayling shares AI-assisted development workflows, SaaS builds, digital products, online income experiments, and real build-in-public lessons.";

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
    template: "%s · Nathelevate",
  },

  description: defaultDescription,

  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Nathelevate",
    "Nathan Ayling",
    "AI development workflows",
    "AI for developers",
    "SaaS builder",
    "build in public",
    "digital products",
    "online income",
    "developer tools",
    "Next.js",
    "AI automation",
    "side hustle experiments",
    "software development",
  ],

  authors: [
    {
      name: "Nathan Ayling",
      url: "https://nathe.tv",
    },
  ],

  creator: "Nathan Ayling",
  publisher: "Nathelevate",

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
        alt: "Nathelevate — AI Workflows, SaaS Builds and Online Income Experiments",
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
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
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-GB",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Nathan Ayling",
        alternateName: "Nathe",
        url: siteUrl,
        sameAs: [
          "https://nathe.tv",
          "https://www.youtube.com/@nathelevate",
          "https://www.facebook.com/nathelevate/",
          "https://www.instagram.com/nathelevate",
          "https://twitter.com/nathelevate",
          "https://www.tiktok.com/@nathelevate",
        ],
        jobTitle: "Full Stack Developer",
        description:
          "Nathan Ayling is a full-stack developer building AI-assisted products, SaaS platforms, digital resources, and online income experiments.",
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
          id="nathelevate-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
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