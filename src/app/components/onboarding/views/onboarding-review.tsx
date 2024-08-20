import ImagePreview from "@/components/shared/image-preview";
import ShouldRender from "@/components/shared/should-render";
import useOnboardingReview from "@/hooks/use-onboarding-review";
import { memo, useCallback } from "react";

function validateImageExtension(fileName: string) {
  const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
  const extension = fileName.split(".").pop();

  if (!extension) return false;
  return allowedExtensions.indexOf(extension.toLowerCase()) !== -1;
}

function OnboardingReview() {
  const { reviewData, keyLabels } = useOnboardingReview();
  const getIsImage = useCallback(
    (value: string) => validateImageExtension(value) && value.includes("https"),
    []
  );

  return (
    <div className="h-[265px] overflow-y-auto max-w-full rounded-[5px] sm:col-span-2 break-words">
      {reviewData.map(({ title, content }, i) => {
        if (!content) return null;
        return (
          <div key={i}>
            <h4 className="bg-[#9E9E9E] border border-[#f5f5f5] py-2 px-[14px] text-gable-green text-[15px] font-semibold">
              {title}
            </h4>
            {content.map(([key, value], i) => (
              <div
                className="grid grid-cols-2 items-center py-2 px-[14px] even:bg-[#f5f5f5]"
                key={i}
              >
                <p className="text-black text-xs font-light">
                  {keyLabels[key as keyof typeof keyLabels]}
                </p>
                <div className="text-black text-xs font-light">
                  <ShouldRender condition={getIsImage(value as string)}>
                    <ImagePreview src={value as string} />
                  </ShouldRender>
                  <ShouldRender condition={!getIsImage(value as string)}>
                    {value as string}
                  </ShouldRender>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default memo(OnboardingReview);
