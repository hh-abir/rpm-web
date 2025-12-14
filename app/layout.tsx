import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
// CHANGE THIS IMPORT:
import NavbarWrapper from "@/components/layout/NavbarWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "RPM | ROBU",
  description: "Research and Project Management Division",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-black text-white antialiased`}>

        {/* REPLACED <Navbar /> with this: */}
        <NavbarWrapper />

        {children}

      </body>
    </html>
  );
}