import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Assuming you use these fonts
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <--- Import it

// Font setup (just an example, keep yours if different)
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

        {/* Navbar goes here, above children */}
        <Navbar />

        {children}

      </body>
    </html>
  );
}