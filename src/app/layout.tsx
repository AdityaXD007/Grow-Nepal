import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Grow Nepal | Scalable Mobile & Web Apps, IT Solutions",
    template: "%s | Grow Nepal",
  },
  description:
    "Grow Nepal is a founder-led IT company building full-featured mobile apps, modern web applications, and scalable cloud solutions for startups and enterprises globally.",
  keywords: [
    "Grow Nepal",
    "IT Company Nepal",
    "Mobile App Development",
    "Web Application Development",
    "Next.js Development",
    "React Native Nepal",
    "Cloud Consulting",
    "Software Engineering Nepal",
  ],
  authors: [{ name: "Grow Nepal Engineering Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grownepal.tech",
    siteName: "Grow Nepal",
    title: "Grow Nepal | Scalable Mobile & Web Apps, IT Solutions",
    description:
      "We build mobile & web apps and IT solutions that scale. Silicon Valley quality delivered with Nepal's agility and cost advantage.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Nepal | Scalable Mobile & Web Apps, IT Solutions",
    description: "We build mobile & web apps and IT solutions that scale.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          href="/videos/hero-bg-poster.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/videos/hero-bg.mp4"
          as="video"
          type="video/mp4"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
