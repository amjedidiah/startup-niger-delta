import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { OtherPersonData } from "@/lib/types";
import { memo, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import SelectInput from "@/components/shared/select-input";

const name = "investmentSize";
const label = "Investment Size";
const placeholder = "Choose investment size";

// TODO: Get correct values for this
const options = [
  { value: "investment-1", label: "Investment 1" },
  { value: "investment-2", label: "Investment 2" },
];

function InvestmentSizeInput() {
  const { personData, setPersonData } = useOnboardingContext();
  const { control, getValues } = useFormContext();

  useEffect(() => {
    return () => {
      const value = getValues(name);

      setPersonData((prev) => {
        if ((prev as OtherPersonData)?.[name]) return prev;

        return {
          ...prev,
          [name]: value,
        } as OtherPersonData;
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
        defaultValue={(personData as OtherPersonData)?.[name]}
        shouldUnregister
      />
    </OnboardingInputContainer>
  );
}

export default memo(InvestmentSizeInput);
