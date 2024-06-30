import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { StartUpPersonData } from "@/lib/types";
import { memo } from "react";
import { useController } from "react-hook-form";

const name = "founderAddress";
const label = "Founder's Address";
const placeholder = "Address Information";

function FounderAddressInput() {
  const { personData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
    },
    defaultValue: (personData as StartUpPersonData)?.[name] || "",
    shouldUnregister: true,
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

export default memo(FounderAddressInput);
