import type { Metadata } from "next";
import { Header, Footer } from "@/components/index";
import { Cormorant_Garamond, Allura, Lato } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Salt & Honey Cafe",
    template: "%s | Salt & Honey Cafe",
  },
  description: "Salt & Honey Cafe is a cafe that serves coffee, tea, and other beverages. Located in the heart of Sea Cliff Avenue, Sea Cliff, NY 11579",
  openGraph: {
    title: "Salt & Honey Cafe",
    description: "Salt & Honey Cafe is a cafe that serves coffee, tea, and other beverages. Located in the heart of Sea Cliff Avenue, Sea Cliff, NY 11579",
  },
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});
const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${cormorantGaramond.variable} ${allura.variable} ${lato.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
