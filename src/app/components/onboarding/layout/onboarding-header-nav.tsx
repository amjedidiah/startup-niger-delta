"use client";
import { SNDTick } from "@/lib/icons";
import OnboardingWrapper from "@/components/onboarding/shared/onboarding-wrapper";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";

function OnboardingHeaderNav() {
  const { activeStepIndex, stepTitles } = useOnboardingContext();

  const completionLevel = useMemo(
    () => Math.round((activeStepIndex / (stepTitles.length + 1)) * 100),
    [activeStepIndex, stepTitles.length]
  );

  return (
    <nav className="bg-green-pattern-3 py-3">
      <OnboardingWrapper className="md:grid-cols-[320px,1fr]">
        <div>
          <p className="text-gable-green font-semibold">
            Status of your application
          </p>
          <p className="text-gable-green font-normal">
            Your application completion level:{" "}
            <span className="font-semibold">{completionLevel}%</span>
          </p>
        </div>
        <div className="flex gap-14 sm:max-md:gap-[115px] lg:gap-24 items-center md:max-xl:justify-end xl:justify-between">
          {stepTitles.map((step, i) => {
            const index = i + 1;
            return (
              <div
                className={cn(
                  "rounded-full text-black w-6 h-6 lg:w-7 lg:h-7 xl:w-[30px] xl:h-[30px] border-2 border-laurel-green-400",
                  {
                    "relative before:absolute before:h-[3px] before:-left-[58px] before:w-[58px] before:top-2 sm:max-md:before:-left-[116px] sm:max-md:before:w-[116px] lg:before:-left-[98px] lg:before:w-[98px] lg:before:top-[10px] xl:before:-left-[570%] xl:before:w-[570%] xl:before:top-3 before:bg-laurel-green-400 before:z-[1]":
                      index > INIT_ONBOARDING_STEP_INDEX,
                    "before:bg-shade-of-amber  border-shade-of-amber":
                      index <= activeStepIndex,
                  }
                )}
                key={step}
              >
                <span
                  className={cn(
                    "z-10 w-full h-full flex justify-center items-center rounded-full",
                    {
                      "bg-tiber-200": index < activeStepIndex,
                      "bg-unknown-500": index === activeStepIndex,
                      "bg-laurel-green-400": index > activeStepIndex,
                    }
                  )}
                >
                  {index >= activeStepIndex ? index : <SNDTick />}
                </span>
              </div>
            );
          })}
        </div>
      </OnboardingWrapper>
    </nav>
  );
}

export default memo(OnboardingHeaderNav);
