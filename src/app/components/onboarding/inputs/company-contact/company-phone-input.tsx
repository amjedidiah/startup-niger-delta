import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ContactData } from "@/lib/types";
import { memo, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

const name = "companyPhoneNumber";
const label = "Company Phone Number";

function CompanyPhoneInput() {
  const { contactData, setContactData } = useOnboardingContext();
  const { control, getValues } = useFormContext();

  useEffect(() => {
    return () => {
      const value = getValues(name);

      setContactData((prev) => {
        if (prev?.[name]) return prev;

        return {
          ...prev,
          [name]: value,
        } as ContactData;
      });
    };
  }, [getValues, setContactData]);

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
        defaultValue={contactData?.[name] || ""}
        defaultCountry="NG"
        autoComplete="tel"
        international
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyPhoneInput);
