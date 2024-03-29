import AuthForm from "@/components/shared/auth/auth-form";
import signinIllustration from "../../../../public/images/signin-illustration.png";
import AuthLayout from "@/components/shared/auth/auth-layout";

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

export default function Signin() {
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
