import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mehedi Hasan Ridoy - Full Stack Developer | React, Next.js, Shopify Expert",
  description:
    "Co-founder & CTO at Softs.ai. Full Stack Developer specializing in React, Next.js, Shopify Apps, and modern web development. 4+ years of experience building world-class applications.",
  keywords: [
    "Mehedi Hasan Ridoy",
    "Full Stack Developer",
    "React Developer",
    "Next.js Expert",
    "Shopify Developer",
    "Shopify Apps",
    "Hydrogen",
    "TypeScript",
    "Node.js",
    "Go Developer",
  ],
  authors: [{ name: "Mehedi Hasan Ridoy" }],
  creator: "Mehedi Hasan Ridoy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ridoy.dev",
    title: "Mehedi Hasan Ridoy - Full Stack Developer",
    description:
      "Co-founder & CTO at Softs.ai. Full Stack Developer specializing in React, Next.js, and Shopify development.",
    siteName: "Ridoy.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Hasan Ridoy - Full Stack Developer",
    description:
      "Co-founder & CTO at Softs.ai. Full Stack Developer specializing in React, Next.js, and Shopify development.",
    creator: "@ridoy",
  },
  metadataBase: new URL("https://ridoy.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased bg-white dark:bg-black`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
