"use client";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo } from "react";
import OnboardingWrapper from "@/components/onboarding/shared/onboarding-wrapper";
import StepNavigation from "@/components/onboarding/layout/step-navigation";
import OnboardingForm from "@/components/onboarding/layout/onboarding-form";
import { cn } from "@/lib/utils";

function OnboardingMain() {
  const { activeStepIndex, companyType, stepTitles } = useOnboardingContext();

  return (
    <main
      className={cn(
        "pt-52 md:max-lg:pt-48 max-lg:pb-24 min-h-[100dvh] lg:pt-44 bg-laurel-green-300",
        {
          "bg-onboarding-1": activeStepIndex % stepTitles.length === 1,
          "bg-onboarding-2": activeStepIndex % stepTitles.length === 2,
          "bg-onboarding-3": activeStepIndex % stepTitles.length === 3,
          "bg-onboarding-4": activeStepIndex % stepTitles.length === 4,
          "bg-onboarding-5": activeStepIndex % stepTitles.length === 0,
        }
      )}
    >
      <OnboardingWrapper>
        <div className="lg:relative">
          <h2 className="capitalize text-tiber font-semibold sm:mb-2">
            {companyType} Registration
          </h2>

          <StepNavigation />
        </div>
        <OnboardingForm />
      </OnboardingWrapper>
    </main>
  );
}

export default memo(OnboardingMain);
