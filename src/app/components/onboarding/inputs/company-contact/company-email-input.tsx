import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo } from "react";
import { useController } from "react-hook-form";

const name = "companyEmail";
const label = "Company Email";
const placeholder = "username@domain.com";

function CompanyEmailInput() {
  const { contactData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
      validate: (value) =>
        Boolean(
          String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) || "Invalid email address",
    },
    defaultValue: contactData?.[name] || "",
  });

  return (
    <OnboardingInputContainer label={label} name={name}>
      <input
        type="email"
        id={name}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="email"
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyEmailInput);
