import AuthForm from "@/components/shared/auth/auth-form";
import signinIllustration from "../../../../../public/images/signin-illustration.png";
import AuthLayout from "@/components/shared/auth/auth-layout";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const greeting = {
  title: "Welcome back!",
  content: "Lorem sum dolor sit amet consectetur. Commodo ",
};

const heading = {
  title: "Sign in",
  description: "Enter your account details",
};

const alternateAction = {
  question: "Don't have an account?",
  link: {
    href: "/signup",
    text: "Sign up",
  },
};

export default async function Signin() {
  const session = await getServerSession();
  if (session) redirect("/verify-email");

  return (
    <AuthLayout
      illustration={signinIllustration}
      greeting={greeting}
      heading={heading}
      alternateAction={alternateAction}
    >
      <AuthForm />
    </AuthLayout>
  );
}
