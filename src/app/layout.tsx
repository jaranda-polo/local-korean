import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { TempoInit } from "./tempo-init";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LocalKorean - Practical Korean Learning with Native Speakers",
  description:
    "An online/offline platform for learning practical Korean for living and traveling in Korea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 flex min-h-screen`}>
        <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
        <TempoInit />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
