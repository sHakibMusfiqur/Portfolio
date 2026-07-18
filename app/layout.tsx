import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const SITE_URL = "https://musfiqurshakib.dev";

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
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Musfiqur Shakib — Software Engineer",
    template: "%s | Musfiqur Shakib",
  },

  description:
    "Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms. Experienced with Next.js, React, NestJS, TypeScript, Python, and cloud infrastructure.",

  keywords: [
    "Musfiqur Shakib",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "AI Engineer",
    "Platform Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "NestJS",
    "Python",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Machine Learning",
    "Portfolio",
    "Dhaka",
    "Bangladesh",
  ],

  authors: [{ name: "Musfiqur Shakib", url: SITE_URL }],
  creator: "Musfiqur Shakib",
  publisher: "Musfiqur Shakib",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Musfiqur Shakib — Software Engineer",
    title: "Musfiqur Shakib — Software Engineer",
    description:
      "Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Musfiqur Shakib — Software Engineer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Musfiqur Shakib — Software Engineer",
    description:
      "Full-stack software engineer specializing in enterprise software, AI-powered applications, and scalable platforms.",
    images: [`${SITE_URL}/og-image.png`],
    creator: "@musfiqurshakib",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },

  manifest: "/site.webmanifest",

  other: {
    "theme-color": "#ffffff",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Musfiqur Shakib",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
