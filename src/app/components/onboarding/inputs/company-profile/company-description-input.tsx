import { CompanyProfileData, UserTypes } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useMemo } from "react";
import { useController } from "react-hook-form";

const name = "companyDescription";
const label = "Company Description";
const placeholder = "Solution";

function CompanyDescriptionInput() {
  const { userType, profileData } = useOnboardingContext();
  const isStartUp = useMemo(() => userType === UserTypes.StartUp, [userType]);

  const { field } = useController({
    name,
    rules: {
      required: true,
      minLength: {
        value: 50,
        message: "Company description must be at least 50 characters long",
      },
    },
    defaultValue: (profileData as CompanyProfileData)?.[name] || "",
  });

  return (
    <OnboardingInputContainer
      label={`${isStartUp ? "Startup" : "Business"} Description`}
      name={name}
    >
      <textarea
        id={name}
        placeholder={placeholder}
        aria-label={label}
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyDescriptionInput);
