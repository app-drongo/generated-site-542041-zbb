import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from '../components/Navigation';
import AnnouncementBar from '../components/AnnouncementBar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Generated Website",
  description: "Generated with template-based AI Website Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
        <Navigation />
        <AnnouncementBar />
        </header>
        {children}
        <footer>
        <Footer />
        <Newsletter />
        </footer>
      </body>
    </html>
  );
}