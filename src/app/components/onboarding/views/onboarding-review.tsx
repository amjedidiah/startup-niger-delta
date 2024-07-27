import ImagePreview from "@/components/shared/image-preview";
import ShouldRender from "@/components/shared/should-render";
import useOnboardingReview from "@/hooks/use-onboarding-review";
import { memo } from "react";

function OnboardingReview() {
  const { onboardingData, keyLabels } = useOnboardingReview();

  return (
    <div className="h-[265px] overflow-y-auto max-w-full rounded-[5px] sm:col-span-2 break-words">
      {onboardingData.map(({ title, content }, i) => {
        if (!content) return null;
        return (
          <div key={i}>
            <h4 className="bg-[#9E9E9E] border border-[#f5f5f5] py-2 px-[14px] text-gable-green text-[15px] font-semibold">
              {title}
            </h4>
            {Object.entries(content).map(([key, value], i) => (
              <div
                className="grid grid-cols-2 items-center py-2 px-[14px] even:bg-[#f5f5f5]"
                key={i}
              >
                <p className="text-black text-xs font-light">
                  {keyLabels[key as keyof typeof keyLabels]}
                </p>
                <p className="text-black text-xs font-light">
                  <ShouldRender condition={typeof value !== "string"}>
                    {value?.label}
                  </ShouldRender>
                  <ShouldRender
                    condition={
                      typeof value === "string" && value.includes("https")
                    }
                  >
                    <ImagePreview src={value} />
                  </ShouldRender>
                  <ShouldRender
                    condition={
                      typeof value === "string" && !value.includes("https")
                    }
                  >
                    {value}
                  </ShouldRender>
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default memo(OnboardingReview);
