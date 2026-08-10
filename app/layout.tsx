import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { DocumentLanguage } from "./_components/DocumentLanguage";
import { SupportPrompt } from "./_components/support-prompt/SupportPrompt";
import { brandSocialImagePath, faviconPath, siteUrl } from "./_config/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Better Care Health Group | Allied Health Melbourne", template: "%s | Better Care Health Group" },
  description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
  applicationName: "Better Care Health Group",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: faviconPath, type: "image/png", sizes: "214x214" }],
    shortcut: [{ url: faviconPath, type: "image/png", sizes: "214x214" }],
    apple: [{ url: faviconPath, type: "image/png", sizes: "214x214" }],
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Better Care Health Group",
    title: "Better Care Health Group | Allied Health Melbourne",
    description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
    images: [{ url: brandSocialImagePath, width: 1731, height: 909, alt: "Better Care Health Group mobile allied health in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Care Health Group | Allied Health Melbourne",
    description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
    images: [brandSocialImagePath],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DocumentLanguage />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <SupportPrompt />
        <Footer />
      </body>
    </html>
  );
}
