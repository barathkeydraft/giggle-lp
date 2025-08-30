import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

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
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "giggle - Unified workspace for modern teams",
  description: "Get more done with less friction. Unified workspace for modern teams to find prospects, organize work, create teams, and get sh*t done.",
  keywords: ["workspace", "productivity", "team collaboration", "project management", "contract management"],
  authors: [{ name: "giggle team" }],
  creator: "giggle",
  publisher: "giggle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://giggle.global'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "giggle - Unified workspace for modern teams",
    description: "Get more done with less friction. Unified workspace for modern teams.",
    url: 'https://giggle.global',
    siteName: 'giggle',
    images: [
      {
        url: '/TopLogo.png',
        width: 1200,
        height: 630,
        alt: 'giggle - Unified workspace for modern teams',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "giggle - Unified workspace for modern teams",
    description: "Get more done with less friction. Unified workspace for modern teams.",
    images: ['/TopLogo.png'],
  },
  icons: {
    icon: [
      { url: '/TopLogo.png', sizes: 'any', type: 'image/png' },
      { url: '/TopLogo.png', sizes: '16x16', type: 'image/png' },
      { url: '/TopLogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/TopLogo.png', sizes: '48x48', type: 'image/png' },
    ],
    shortcut: '/TopLogo.png',
    apple: '/TopLogo.png',
    other: [
      { rel: 'icon', url: '/TopLogo.png', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TopLogo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/TopLogo.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/TopLogo.png" />
        <link rel="apple-touch-icon" href="/TopLogo.png" />
        <meta name="msapplication-TileImage" content="/TopLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
