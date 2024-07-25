import useOnboardingContext from "@/hooks/use-onboarding-context";
import StepNavigationItem from "@/components/onboarding/layout/step-navigation-item";
import { memo } from "react";

function StepNavigation() {
  const { stepTitles, activeStepIndex } = useOnboardingContext();
  return (
    <ul className="flex flex-col lg:mt-20">
      {stepTitles.map((item, i) => (
        <StepNavigationItem
          key={item}
          value={item}
          isActive={i + 1 === activeStepIndex}
          isPassed={i + 1 < activeStepIndex}
          isFirst={i === 0}
        />
      ))}
    </ul>
  );
}

export default memo(StepNavigation);
