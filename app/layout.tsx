import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { SupportPrompt } from "./_components/support-prompt/SupportPrompt";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bettercarehg.com"),
  title: { default: "Better Care Health Group | Allied Health Melbourne", template: "%s | Better Care Health Group" },
  description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
  icons: { icon: "/brand/better-care-logo.png", shortcut: "/brand/better-care-logo.png" },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Better Care Health Group",
    title: "Better Care Health Group | Allied Health Melbourne",
    description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
    images: [{ url: "/brand/better-care-og.png", width: 1200, height: 630, alt: "Better Care Health Group mobile allied health in Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Care Health Group | Allied Health Melbourne",
    description: "Mobile allied health, physiotherapy, NDIS and Support at Home services across Melbourne.",
    images: ["/brand/better-care-og.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <SupportPrompt />
        <Footer />
      </body>
    </html>
  );
}
