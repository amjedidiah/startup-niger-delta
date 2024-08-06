import useOnboardingContext from "@/hooks/use-onboarding-context";
import { useMemo } from "react";

export default function useOnboardingReview() {
  const { onboardingData, stepTitles, keyLabels } = useOnboardingContext();
  const reviewData = useMemo(
    () =>
      stepTitles.slice(0, -1).map((item, i) => ({
        title: item,
        content: Object.values(onboardingData)[i],
      })),
    []
  );

  return { reviewData, keyLabels };
}
