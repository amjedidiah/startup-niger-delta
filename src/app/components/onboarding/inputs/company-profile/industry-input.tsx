import { StartUpProfileData } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import SelectInput from "@/components/shared/select-input";

const name = "industry";
const label = "Industry";
const placeholder = "Select your industry";

// TODO: Get the correct industry values
const options = [
  {
    value: "it",
    label: "IT",
  },
  {
    value: "health",
    label: "Health",
  },
];

function IndustryInput() {
  const { profileData, setProfileData } = useOnboardingContext();
  const { control, getValues } = useFormContext();

  useEffect(() => {
    return () => {
      const value = getValues(name);

      setProfileData((prev) => {
        if ((prev as StartUpProfileData)?.[name]) return prev;

        return {
          ...prev,
          [name]: value,
        } as StartUpProfileData;
      });
    };
  }, [getValues, setProfileData]);

  return (
    <OnboardingInputContainer label={label} name={name}>
      <Controller
        name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={(props) => (
          <SelectInput placeholder={placeholder} options={options} {...props} />
        )}
        defaultValue={(profileData as StartUpProfileData)?.[name]}
        shouldUnregister
      />
    </OnboardingInputContainer>
  );
}

export default memo(IndustryInput);
