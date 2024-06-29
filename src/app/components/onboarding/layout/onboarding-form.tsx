import { UserTypes } from "@/lib/types";
import { FormEventHandler, memo, useCallback, useMemo } from "react";
import OnboardingFormSelector from "@/components/onboarding/layout/onboarding-view-selector";
import { useOnboardingContext } from "@/contexts/onboarding.context";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import CompanyProfile from "@/components/onboarding/views/company-profile";
import CompanyContact from "@/components/onboarding/views/company-contact";
import PersonProfile from "@/components/onboarding/views/person-profile";
import OnboardingIdentification from "@/components/onboarding/views/onboarding-identification";

const getActiveComponent = (index: number) =>
  ({
    2: CompanyContact,
    3: PersonProfile,
    4: OnboardingIdentification,
  }[index] || CompanyProfile);

function OnboardingForm() {
  const { activeStepIndex, setActiveStepIndex, stepTitles, canGoNext } =
    useOnboardingContext();
  const userTypes = useMemo(() => Object.values(UserTypes), []);

  const canGoBack = useMemo(
    () => activeStepIndex > INIT_ONBOARDING_STEP_INDEX,
    [activeStepIndex]
  );
  const shouldSubmit = useMemo(
    () => activeStepIndex >= stepTitles.length,
    [activeStepIndex, stepTitles.length]
  );

  const handleBack = useCallback(() => {
    if (canGoBack) setActiveStepIndex((prev) => prev - 1);
  }, [canGoBack, setActiveStepIndex]);
  const handleNext: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (!canGoNext) return;
      if (!shouldSubmit) return setActiveStepIndex((prev) => prev + 1);
    },
    [canGoNext, setActiveStepIndex, shouldSubmit]
  );

  const ActiveComponent = useMemo(
    () => getActiveComponent(activeStepIndex),
    [activeStepIndex]
  );

  return (
    <div>
      <form className="bg-white w-full max-w-[710px] rounded-[10px] shadow-onboarding-form p-9 pt-0 mt-7 flex flex-col gap-[42px]">
        <div className="border-b border-laurel-green-300 py-[18px] flex items-center gap-3 mx-5">
          {userTypes.map((item) => (
            <OnboardingFormSelector key={item} value={item} />
          ))}
        </div>

        <div className="onboarding-form-container">
          <ActiveComponent />
        </div>

        <div className="mt-[62px] flex items-end justify-between gap-5">
          <p className="text-unknown-100 text-sm font-normal">
            *You must fill in all fields to be able to continue
          </p>

          <div className="flex items-center gap-[10px]">
            <button
              disabled={!canGoBack}
              onClick={handleBack}
              type="button"
              className="bg-onboarding-button shadow-onboarding-button py-[5px] px-[21px] rounded-[5px] text-white font-normal disabled:text-unknown-600"
            >
              Back
            </button>
            <button
              disabled={!canGoNext}
              onClick={handleNext}
              className="bg-onboarding-button shadow-onboarding-button py-[5px] px-[21px] rounded-[5px] text-white font-normal disabled:text-unknown-600"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(OnboardingForm);
