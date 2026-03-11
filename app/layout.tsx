import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/layout/NavbarWrapper";

// Load fonts with CSS variables
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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
      <body
        className={`
          ${inter.variable} ${jetbrains.variable} 
          font-sans bg-[#020202] text-white antialiased
          selection:bg-blue-500/30 selection:text-blue-200
          py-15 pt-10
        `}
      >
        {/* GLOBAL BACKGROUND GRID */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

        {/* Navigation */}
        <div className="relative z-50">
          <NavbarWrapper />
        </div>

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
