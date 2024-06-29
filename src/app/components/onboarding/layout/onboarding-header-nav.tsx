"use client";
import { SNDTick } from "@/lib/icons";
import OnboardingWrapper from "@/components/onboarding/shared/onboarding-wrapper";
import { useOnboardingContext } from "@/contexts/onboarding.context";
import { memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";

function OnboardingHeaderNav() {
  const { activeStepIndex, stepTitles } = useOnboardingContext();

  const completionLevel = useMemo(
    () => (activeStepIndex / (stepTitles.length + 1)) * 100,
    [activeStepIndex, stepTitles.length]
  );

  return (
    <nav className="bg-green-pattern-3 py-3">
      <OnboardingWrapper>
        <div>
          <p className="text-gable-green font-semibold">
            Status of your application
          </p>
          <p className="text-gable-green font-normal">
            Your application completion level:{" "}
            <span className="font-semibold">{completionLevel}%</span>
          </p>
        </div>
        <div className="flex items-center gap-28">
          {stepTitles.map((step, i) => {
            const index = i + 1;
            return (
              <div
                className={cn(
                  "rounded-full text-black w-[30px] h-[30px] border-2 border-laurel-green-400",
                  {
                    "relative before:absolute before:-left-[114px] before:w-[114px] before:h-[3px] before:top-3 before:bg-laurel-green-400 before:z-[1]":
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
