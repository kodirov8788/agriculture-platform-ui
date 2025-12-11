import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Changed fonts
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example-store.com'),
  title: "Example Store | E-Commerce Template",
  description: "A premium e-commerce template for demonstration purposes.",
  openGraph: {
    title: "Example Store | E-Commerce Template",
    description: "Example store template for developers.",
    images: ["/images/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans bg-agri-light text-gray-800 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
