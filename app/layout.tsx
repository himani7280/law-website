import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/data";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: "Veyra Legal is a premier law firm of Advocates & Legal Consultants specializing in Supreme Court litigation, corporate & M&A advisory, commercial arbitration, and regulatory defense.",
  icons: { icon: "/logo-icon.webp", apple: "/logo-icon.webp" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-forest-900">
      <body className="bg-forest-900">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
