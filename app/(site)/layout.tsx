import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import "../globals.css";

import Footer from "@/Components/Home/Footer/HomeFooter";
import Navbar from "@/Components/Catalog/CatalogNavbar";

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
  return (
   
       <>
        {children}
       </>
   
  );
}
