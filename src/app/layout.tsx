import { poppins, inter } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import ToastContainer from "@/components/shared/toast-container";

export const metadata: Metadata = {
  title: "StartUp Niger Delta",
  description:
    "Unlocking The Next Startup Innovative & Burgeoning Opportunities",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} font-poppins`}
    >
      <body className="h-full">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
