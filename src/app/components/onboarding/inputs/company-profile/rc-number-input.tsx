import { CompanyProfileData } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useEffect } from "react";
import { useController } from "react-hook-form";

const name = "rcNumber";
const label = "RC Number";
const placeholder = "Registration number";

function RCNumberInput() {
  const { profileData, setProfileData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
    },
    defaultValue: (profileData as CompanyProfileData)?.[name] || "",
    shouldUnregister: true,
  });

  useEffect(() => {
    return () =>
      setProfileData(
        (prev) =>
          ({
            ...prev,
            [name]: field.value,
          } as CompanyProfileData)
      );
  }, [field.value, setProfileData]);

  return (
    <OnboardingInputContainer label={label} name={name}>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        aria-label={label}
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(RCNumberInput);
