import { memo } from "react";
import OnboardingHeaderTop from "@/components/onboarding/layout/onboarding-header-top";
import OnboardingHeaderNav from "@/components/onboarding/layout/onboarding-header-nav";

function OnboardingHeader() {
  return (
    <header className="fixed left-0 -right-1 top-0">
      <OnboardingHeaderTop />
      <OnboardingHeaderNav />
    </header>
  );
}

export default memo(OnboardingHeader);
