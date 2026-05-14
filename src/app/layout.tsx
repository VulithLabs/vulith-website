import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vulith Labs — Web3 & AI Security Research",
  description:
    "Research-driven Web3 & AI security organization based in Singapore. Protocol-level security, formal verification, and adversarial AI research.",
  keywords: [
    "Web3 security",
    "AI safety",
    "smart contract audit",
    "formal verification",
    "blockchain security",
    "Vulith Labs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
