import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { AngelInvestorProfileData } from "@/lib/types";
import { memo, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import countryList from "react-select-country-list";
import SelectInput from "@/components/shared/select-input";

const name = "nationality";
const label = "Nationality";
const placeholder = "Country of Origin";
const options = countryList().getData();

function NationalityInput() {
  const { profileData, setProfileData } = useOnboardingContext();
  const { control, getValues } = useFormContext();

  useEffect(() => {
    return () => {
      const value = getValues(name);

      setProfileData((prev) => {
        if ((prev as AngelInvestorProfileData)?.[name]) return prev;

        return {
          ...prev,
          [name]: value,
        } as AngelInvestorProfileData;
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
        defaultValue={(profileData as AngelInvestorProfileData)?.[name]}
        shouldUnregister
      />
    </OnboardingInputContainer>
  );
}

export default memo(NationalityInput);
