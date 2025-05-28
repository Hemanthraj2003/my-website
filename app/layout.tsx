import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hemanth Raj - Full Stack Developer & Android App Developer",
  description:
    "20-year-old Full Stack Developer and Android Application Developer with expertise in React, Next.js, Node.js, and mobile development. Passionate about creating dynamic, user-friendly applications.",
  keywords:
    "Full Stack Developer, Android Developer, React, Next.js, Node.js, JavaScript, TypeScript, Web Development, Mobile Development, Hemanth Raj",
  authors: [{ name: "Hemanth Raj N" }],
  creator: "Hemanth Raj N",
  publisher: "Hemanth Raj N",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemanth-raj.netlify.app",
    title: "Hemanth Raj - Full Stack Developer & Android App Developer",
    description:
      "20-year-old Full Stack Developer and Android Application Developer with expertise in React, Next.js, Node.js, and mobile development.",
    siteName: "Hemanth Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanth Raj - Full Stack Developer & Android App Developer",
    description:
      "20-year-old Full Stack Developer and Android Application Developer with expertise in React, Next.js, Node.js, and mobile development.",
    creator: "@hemanth15raj",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="forest">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#171717" />
        <meta
          name="google-site-verification"
          content="vRHQajcrr4F5AYSMk-owR01kgZWIiWpDAmewcKmqTi4"
        />
        <meta name="fast2sms" content="rE9q6LMlaHgzmTPlZNtyiNuFFBiWGMeJ" />
        <link rel="canonical" href="https://hemanth-raj.netlify.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
