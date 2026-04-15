import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RAIL · Reliable AI Lab",
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
        className={`${inter.variable} bg-white text-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
