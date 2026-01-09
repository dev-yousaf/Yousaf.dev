import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Theme switching removed — use default styling
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Yousaf - Flutter & Firebase Developer",
  description: "Mobile App Developer specialized in Flutter and Firebase, passionate about building smooth, data-driven Android and cross-platform apps.",
  keywords: ["Flutter Developer", "Firebase", "Mobile App Development", "Muhammad Yousaf", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
