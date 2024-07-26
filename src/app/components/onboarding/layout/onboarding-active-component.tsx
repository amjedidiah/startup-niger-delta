import { Fragment, memo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import CompanyProfile from "@/components/onboarding/views/company-profile";
import CompanyContact from "@/components/onboarding/views/company-contact";
import PersonProfile from "@/components/onboarding/views/person-profile";
import OnboardingIdentification from "@/components/onboarding/views/onboarding-identification";
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
        <PersonProfile />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 4}>
        <OnboardingIdentification />
      </ShouldRender>
      <ShouldRender condition={activeStepIndex === 5}>
        <OnboardingReview />
      </ShouldRender>
    </Fragment>
  );
}

export default memo(OnboardingActiveComponent);
