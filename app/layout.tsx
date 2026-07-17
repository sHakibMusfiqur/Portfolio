import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://yourportfolio.com"),

  title: {
    default: "Musfiqur Shakib | Software Engineer",
    template: "%s | Musfiqur Shakib",
  },

  description:
    "Software Engineer specializing in Full Stack Development, AI, Enterprise Software, Platform Engineering, and Software Architecture.",

  keywords: [
    "Musfiqur Shakib",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Platform Engineer",
    "Next.js",
    "React",
    "NestJS",
    "TypeScript",
    "Python",

  ],

  authors: [
    {
      name: "Musfiqur Shakib",
    },
  ],

  creator: "Musfiqur Shakib",

  openGraph: {
    title: "Musfiqur Shakib | Software Engineer",
    description:
      "Software Engineer specializing in Full Stack Development, AI, Enterprise Software, and Platform Engineering.",
    url: "https://yourportfolio.com",
    siteName: "Musfiqur Shakib Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Musfiqur Shakib | Software Engineer",
    description:
      "Software Engineer specializing in Full Stack Development, AI, Enterprise Software, and Platform Engineering.",
  },

  robots: {
    index: true,
    follow: true,
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
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}