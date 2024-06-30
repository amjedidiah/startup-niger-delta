import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { StartUpProfileData } from "@/lib/types";
import { memo, useEffect } from "react";
import { useController } from "react-hook-form";

const name = "yearsOfInc";
const label = "Year of Incorporation";
const validate = (value: string) => {
  const now = Math.floor(new Date().getTime() / 1000 / 3600 / 24);
  const incDate = Math.floor(new Date(value).getTime() / 1000 / 3600 / 24);

  return now > incDate || "Invalid year of incorporation";
};

function YearsOfIncInput() {
  const { profileData, setProfileData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
      validate,
    },
    defaultValue: (profileData as StartUpProfileData)?.[name] || "",
    shouldUnregister: true,
  });

  useEffect(() => {
    return () =>
      setProfileData(
        (prev) =>
          ({
            ...prev,
            [name]: field.value,
          } as StartUpProfileData)
      );
  }, [field.value, setProfileData]);

  return (
    <OnboardingInputContainer label={label} name={name}>
      <input type="date" id={name} aria-label={label} {...field} />
    </OnboardingInputContainer>
  );
}

export default memo(YearsOfIncInput);
