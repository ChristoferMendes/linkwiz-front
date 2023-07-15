import { Nav } from "@/components/nav";
import "./globals.css";
import type { Metadata } from "next";
import {
  Montserrat_Alternates,
  Montserrat_Subrayada,
  Montserrat,
} from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-montserrat-alternates",
});

export const montserrat_subrayada = Montserrat_Subrayada({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-montserrat-subrayada",
});

export const montserrat = Montserrat({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "LinkWiz",
  description: "Shorten your links easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${montserrat_alternates.className}`}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
