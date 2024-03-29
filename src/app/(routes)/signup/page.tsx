import AuthForm from "@/components/shared/auth/auth-form";
import signupIllustration from "../../../../public/images/signup-illustration.png";
import AuthLayout from "@/components/shared/auth/auth-layout";

const greeting = {
  title: "Welcome!",
  content: "Join our next list of Niger Delta innovation ecosystem.",
};

const heading = {
  title: "Create an account",
  description: "Let's get started with getting you in",
};

const alternateAction = {
  question: "Already have an account?",
  link: {
    href: "/signin",
    text: "Sign in",
  },
};

export default function Signup() {
  return (
    <AuthLayout
      illustration={signupIllustration}
      greeting={greeting}
      heading={heading}
      alternateAction={alternateAction}
    >
      <AuthForm isSignupForm />
    </AuthLayout>
  );
}
