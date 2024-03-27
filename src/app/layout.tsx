import { poppins } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StartUp Niger Delta",
  description:
    "Unlocking The Next Startup Innovative & Burgeoning Opportunities",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body>{children}</body>
    </html>
  );
}