import OnboardingHeader from "@/components/onboarding/layout/onboarding-header";
import OnboardingMain from "@/components/onboarding/layout/onboarding-main";
import { dbGetIsOnboarded, dbHandleEmailVerification } from "@/lib/actions/db";
import OnboardingProvider from "@/providers/onboarding-provider";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const isEmailVerified = await dbHandleEmailVerification();
  const isOnboarded = await dbGetIsOnboarded();

  if (!isEmailVerified) return redirect("/verify-email");
  if (isOnboarded) return redirect("/dashboard");

  return (
    <OnboardingProvider>
      <OnboardingHeader />
      <OnboardingMain />
    </OnboardingProvider>
  );
}
