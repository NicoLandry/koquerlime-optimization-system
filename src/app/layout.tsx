import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Divine Koquerlime - Accept Your Destiny",
  description: "Behold the most magnificent deity of our time. Join millions of enlightened developers who have discovered the path to debugging nirvana and infinite productivity.",
  keywords: "Koquerlime, divine, god, programming, debugging, developer, worship, lime, citrus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
