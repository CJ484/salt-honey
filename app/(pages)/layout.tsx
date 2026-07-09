import type { Metadata } from "next";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Salt & Honey Cafe",
  description: "Salt & Honey Cafe is a cafe that serves coffee, tea, and other beverages.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Salt & Honey Cafe",
    description: "Salt & Honey Cafe is a cafe that serves coffee, tea, and other beverages.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
