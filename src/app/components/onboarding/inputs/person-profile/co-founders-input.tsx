import { StartUpPersonData } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import SelectInput from "@/components/shared/select-input";

const name = "noOfCoFounders";
const label = "No of Co-founders";
const placeholder = "Choose Number of CoFounders";
const options = Array(10)
  .fill(0)
  .map((_item, i) => ({ label: i + 1 + "", value: i + 1 + "" }));

function CoFoundersInput() {
  const { personData, setPersonData } = useOnboardingContext();
  const { control, getValues } = useFormContext();

  useEffect(() => {
    return () => {
      const value = getValues(name);

      setPersonData((prev) => {
        if ((prev as StartUpPersonData)?.[name]) return prev;

        return {
          ...prev,
          [name]: value,
        } as StartUpPersonData;
      });
    };
  }, [getValues, setPersonData]);

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
        defaultValue={(personData as StartUpPersonData)?.[name]}
        shouldUnregister
      />
    </OnboardingInputContainer>
  );
}

export default memo(CoFoundersInput);
