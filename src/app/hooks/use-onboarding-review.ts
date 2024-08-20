import useOnboardingContext from "@/hooks/use-onboarding-context";
import { SelectData } from "@/lib/types";
import { useMemo } from "react";

export default function useOnboardingReview() {
  const { onboardingData, stepTitles, keyLabels } = useOnboardingContext();
  const reviewData = useMemo(
    () =>
      stepTitles
        .slice(0, -1)
        .map((item, i) => ({
          title: item,
          content: Object.values(onboardingData)[i],
        }))
        .map(({ title, content }, i) => {
          const cont = Object.entries(content).map(([key, value]) => {
            let result = value;

            if (typeof value !== "string") {
              if (Array.isArray(value))
                result = (value as SelectData[])
                  .map((item) => item.label)
                  .join(", ");
              else result = (value as SelectData).label;
            }

            return [key, result];
          });

          return { title, content: cont };
        }),
    [onboardingData, stepTitles]
  );

  return { reviewData, keyLabels };
}
