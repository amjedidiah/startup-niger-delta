import { poppins, inter } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import ToastContainer from "@/components/shared/toast-container";
import { SessionProvider } from "@/components/shared/session-provider";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "StartUp Niger Delta",
  description:
    "Unlocking The Next Startup Innovative & Burgeoning Opportunities",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const session = await getServerSession();

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} font-poppins`}
    >
      <body className="h-full">
        <SessionProvider session={session}>{children}</SessionProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
