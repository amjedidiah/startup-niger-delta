import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { PersonData, StartUpPersonData } from "@/lib/types";
import { memo, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const name = "founderPhoneNumber";
const label = "Founder's Phone Number";

function FounderPhoneInput() {
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
        } as PersonData;
      });
    };
  }, [getValues, setPersonData]);

  return (
    <OnboardingInputContainer label={label} name={name}>
      <PhoneInputWithCountry
        name={name}
        control={control}
        rules={{
          required: true,
          validate: (value: string) =>
            isPossiblePhoneNumber(value) || "Invalid phone number",
        }}
        defaultValue={(personData as StartUpPersonData)?.[name] || ""}
        shouldUnregister
        defaultCountry="NG"
        autoComplete="tel"
        international
      />
    </OnboardingInputContainer>
  );
}

export default memo(FounderPhoneInput);
