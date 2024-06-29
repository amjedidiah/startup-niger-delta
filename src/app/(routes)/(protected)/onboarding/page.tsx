import OnboardingHeader from "@/components/onboarding/layout/onboarding-header";
import OnboardingMain from "@/components/onboarding/layout/onboarding-main";
import { OnboardingContextProvider } from "@/contexts/onboarding.context";

export default function Onboarding() {
  return (
    <OnboardingContextProvider>
      <OnboardingHeader />
      <OnboardingMain />
    </OnboardingContextProvider>
  );
}
