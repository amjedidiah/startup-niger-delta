import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo } from "react";
import { useController } from "react-hook-form";

const name = "companyWebsite";
const label = "Company Website";
const placeholder = "www.website.com";

function CompanyWebsiteInput() {
  const { contactData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
      validate: (value) =>
        Boolean(
          String(value)
            .toLowerCase()
            .match(/^www\.[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/)
        ) || "Invalid website",
    },
    defaultValue: contactData?.[name] || "",
  });

  return (
    <OnboardingInputContainer label={label} name={name}>
      <input
        type="url"
        id={name}
        placeholder={placeholder}
        aria-label={label}
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyWebsiteInput);
