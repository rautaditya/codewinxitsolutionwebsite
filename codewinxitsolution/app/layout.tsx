import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "CodeWinx IT Solutions — Web, Mobile & AI Development",
    template: "%s | CodeWinx IT Solutions",
  },
  description:
    "CodeWinx IT Solutions is a full-service software agency specializing in web development, mobile apps, UI/UX design, cloud infrastructure, AI automation, and digital marketing.",
  keywords: [
    "IT solutions",
    "web development",
    "mobile app development",
    "Next.js agency",
    "React development",
    "software company India",
    "UI UX design",
    "AI automation",
    "digital marketing",
  ],
  authors: [{ name: "CodeWinx IT Solutions" }],
  creator: "CodeWinx IT Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codewinxitsolution.com",
    siteName: "CodeWinx IT Solutions",
    title: "CodeWinx IT Solutions — Web, Mobile & AI Development",
    description:
      "Full-service software agency specializing in web development, mobile apps, UI/UX design, and AI automation.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CodeWinx IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeWinx IT Solutions",
    description: "Web, Mobile & AI Development Agency",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
