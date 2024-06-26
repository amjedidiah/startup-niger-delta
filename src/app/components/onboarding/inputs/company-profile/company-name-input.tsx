import { StartUpProfileData, UserTypes } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useMemo } from "react";
import { useController } from "react-hook-form";

const name = "companyName";
const label = "Company Name";
const placeholder = "Registered name";

function CompanyNameInput() {
  const { userType, profileData } = useOnboardingContext();
  const isAngelInvestor = useMemo(
    () => userType === UserTypes.AngelInvestor,
    [userType]
  );

  // TODO: API to validate company name with existing records
  const { field } = useController({
    name,
    rules: {
      required: true,
      minLength: {
        message: "Invalid company name",
        value: 2,
      },
    },
    defaultValue: (profileData as StartUpProfileData)?.[name] || "",
  });

  return (
    <OnboardingInputContainer
      label={`Company ${isAngelInvestor ? "/ Individual" : ""} Name`}
      name={name}
    >
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="name"
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(CompanyNameInput);
