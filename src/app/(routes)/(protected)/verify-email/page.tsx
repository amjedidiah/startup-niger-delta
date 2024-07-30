import signupIllustration from "../../../../../public/images/signup-illustration.png";
import AuthLayout from "@/components/shared/auth/auth-layout";
import { dbGetEmailVerified } from "@/lib/action/db";
import { redirect } from "next/navigation";
import { getServerSession, Session } from "next-auth";
import AwaitingVerification from "@/components/shared/auth/awaiting-verification";

const greeting = {
  title: "Congratulations!",
  content:
    "We are excited that you have signed up to join our next list of Niger Delta innovation ecosystem.",
};

const heading = {
  title: "Verify Email",
  description: "Verify your email to get in",
};

export default async function VerifyEmail() {
  const session = (await getServerSession()) as Session;
  const isEmailVerified = await dbGetEmailVerified();
  if (isEmailVerified) return redirect("/onboarding");

  return (
    <AuthLayout
      illustration={signupIllustration}
      greeting={greeting}
      heading={heading}
    >
      <AwaitingVerification email={session.user.email} />
    </AuthLayout>
  );
}
