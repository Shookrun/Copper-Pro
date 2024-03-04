import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import Footer from "@/Components/Home/Footer/Footer";
import Header from "@/Components/Home/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";
  const pathname = headersList.get("x-pathname");
  const origin_url = headersList.get("x-origin");
  console.log(pathname);
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} scroll-smooth`}>
        {pathname !== "/" && <Header />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
