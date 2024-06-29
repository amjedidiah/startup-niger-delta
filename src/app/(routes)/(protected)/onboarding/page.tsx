import OnboardingHeader from "@/components/onboarding/layout/onboarding-header";
import OnboardingMain from "@/components/onboarding/layout/onboarding-main";
import OnboardingProvider from "@/providers/onboarding-provider";

export default function Onboarding() {
  return (
    <OnboardingProvider>
      <OnboardingHeader />
      <OnboardingMain />
    </OnboardingProvider>
  );
}
