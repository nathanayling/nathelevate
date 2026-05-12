import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nathelevate.com"),
  title: {
    default: "Nathelevate — Turn Focus Into Momentum",
    template: "%s · Nathelevate",
  },
  description:
    "Nathelevate is an execution platform for builders: tools, AI helpers, playbooks, and tutorials designed to turn focus into momentum.",
  openGraph: {
    type: "website",
    url: "https://nathelevate.com",
    title: "Nathelevate — Turn Focus Into Momentum",
    description:
      "Tools, AI helpers, playbooks, and tutorials built for people who actually build. Execution over motivation.",
    siteName: "Nathelevate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nathelevate — Turn Focus Into Momentum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nathelevate — Turn Focus Into Momentum",
    description:
      "Execution-first tools and systems for builders: momentum, focus, and real outcomes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-text antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <div className="pointer-events-none fixed inset-0 bg-radial-fade" />
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}