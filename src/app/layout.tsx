import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "RAIL - Reliable AI Lab",
    template: "%s | RAIL",
  },
  description:
    "RAIL – Reliable AI Lab at University College Cork advances cutting-edge research in trustworthy, explainable, and safe artificial intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
