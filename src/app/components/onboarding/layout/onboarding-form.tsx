import { memo } from "react";
import OnboardingFormSelector from "@/components/onboarding/layout/onboarding-view-selector";
import ShouldRender from "@/components/shared/should-render";
import { cn } from "@/lib/utils";
import useOnboardingForm from "@/hooks/use-onboarding-form";
import OnboardingActiveComponent from "@/components/onboarding/layout/onboarding-active-component";

function OnboardingForm() {
  const {
    companyTypes,
    shouldSubmit,
    hasAgreed,
    canGoBack,
    canGoNext,
    handleBack,
    handleNext,
    setHasAgreed,
    stepTitles,
    activeStepIndex,
    isLoading,
  } = useOnboardingForm();

  return (
    <div>
      <form className="bg-white w-full rounded-[10px] shadow-onboarding-form p-9 pt-0 mt-2 lg:mt-7 flex flex-col gap-6 xl:gap-[42px]">
        <div className="border-b border-laurel-green-300 py-[18px] flex max-sm:flex-col sm:items-center gap-3 lg:mx-5">
          {companyTypes.map((item) => (
            <OnboardingFormSelector key={item} value={item} />
          ))}
        </div>
        <div className="onboarding-form-container">
          <h3 className="lg:hidden sm:col-span-2">
            {stepTitles[activeStepIndex - 1]}
          </h3>
          <OnboardingActiveComponent />
          <ShouldRender condition={shouldSubmit}>
            <p className="text-black text-sm sm:col-span-2 break-words">
              By submitting this application, you agree to abide by the terms
              and conditions of the program, including attendance, code of
              conduct, and other program-specific requirements.
            </p>
          </ShouldRender>
        </div>
        <div
          className={cn(
            "mt-8 flex max-sm:flex-col sm:items-end justify-between gap-5",
            {
              "mt-0": shouldSubmit,
            }
          )}
        >
          <ShouldRender condition={!shouldSubmit}>
            <p className="text-unknown-100 text-sm font-normal">
              *You must fill in all fields to be able to continue
            </p>
          </ShouldRender>
          <ShouldRender condition={shouldSubmit}>
            <p className="text-black text-sm flex items-center gap-1">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                aria-label="agreement"
                className="max-w-fit"
                onChange={(e) => setHasAgreed(e.currentTarget.checked)}
                checked={hasAgreed}
              />
              <label htmlFor="agreement">Yes, I agree</label>
            </p>
          </ShouldRender>

          <div className="flex items-center gap-[10px]">
            <button
              disabled={!canGoBack}
              onClick={handleBack}
              type="button"
              className="max-sm:flex-1 bg-onboarding-button shadow-onboarding-button py-[5px] px-[21px] rounded-[5px] text-white font-normal disabled:text-unknown-600"
            >
              Back
            </button>
            <button
              disabled={!canGoNext || isLoading}
              onClick={handleNext}
              className={cn(
                "max-sm:flex-1 bg-onboarding-button shadow-onboarding-button py-[5px] px-[21px] rounded-[5px] text-white font-normal disabled:text-unknown-600",
                {
                  "animate-pulse": isLoading,
                }
              )}
            >
              {shouldSubmit ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(OnboardingForm);
