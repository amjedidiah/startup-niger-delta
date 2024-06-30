import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo } from "react";
import { useController } from "react-hook-form";

const name = "companyAddress";
const label = "Company Address";
const placeholder = "Address Information";

function CompanyAddressInput() {
  const { contactData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
    },
    defaultValue: contactData?.[name] || "",
  });

  return (
    <OnboardingInputContainer label={label} name={name}>
      <textarea
        id={name}
        placeholder={placeholder}
        aria-label={label}
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyAddressInput);
