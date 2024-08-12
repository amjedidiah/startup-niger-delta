import { Fragment, memo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import CompanyProfile from "@/components/onboarding/views/company-profile";
import CompanyContact from "@/components/onboarding/views/company-contact";
import CompanyRepresentative from "@/components/onboarding/views/company-representative";
import CompanyIdentification from "@/components/onboarding/views/company-identification";
import OnboardingReview from "@/components/onboarding/views/onboarding-review";
import ShouldRender from "@/components/shared/should-render";

function OnboardingActiveComponent() {
  const { activeStepIndex } = useOnboardingContext();

  return (
    <Fragment>
      <ShouldRender condition={activeStepIndex === 1}>
        <CompanyProfile />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 2}>
        <CompanyContact />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 3}>
        <CompanyRepresentative />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 4}>
        <CompanyIdentification />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 5}>
        <OnboardingReview />
      </ShouldRender>
    </Fragment>
  );
}

export default memo(OnboardingActiveComponent);
