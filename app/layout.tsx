import type { Metadata } from "next";
import { Archivo, Chivo_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const chivoMono = Chivo_Mono({
  variable: "--font-chivo-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "N7",
  description: "The new foundation of modern banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${chivoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#000D12] text-white">
        {children}
      </body>
    </html>
  );
}
