import useOnboardingContext from "@/hooks/use-onboarding-context";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import { CompanyTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import { memo, useCallback, useMemo } from "react";

type OnboardingFormSelectorProps = {
  value: CompanyTypes;
};

function OnboardingFormSelector({ value }: OnboardingFormSelectorProps) {
  const { companyType, setCompanyType, activeStepIndex } =
    useOnboardingContext();

  const handleChange = useCallback(
    () => setCompanyType(value),
    [setCompanyType, value]
  );

  const isDisabled = useMemo(
    () => activeStepIndex > INIT_ONBOARDING_STEP_INDEX,
    [activeStepIndex]
  );

  const isActive = useMemo(() => companyType === value, [companyType, value]);

  return (
    <div className="max-w-56 inline-flex gap-1 items-center">
      <input
        type="radio"
        id={value}
        name="user_type"
        value={value}
        checked={isActive}
        onChange={handleChange}
        disabled={isDisabled}
        className={cn(
          "relative appearance-none bg-white m-0 w-4 h-4 rounded-full border border-tiber flex-shrink-0 grid place-content-center",
          {
            "before:bg-tiber-200 before:w-2 before:h-2 before:rounded-full before:left-1 before:top-1":
              isActive,
          }
        )}
      />
      <label
        htmlFor={value}
        className={cn("text-timber text-sm font-normal capitalize", {
          "text-slate-400": isDisabled && !isActive,
        })}
      >
        {value}
      </label>
    </div>
  );
}

export default memo(OnboardingFormSelector);
