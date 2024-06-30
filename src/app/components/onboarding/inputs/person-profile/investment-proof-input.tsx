import { OtherPersonData } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useEffect } from "react";
import { useController } from "react-hook-form";

const name = "investmentProof";
const label = "Investment Proof";
const placeholder = "Eg: https://docs.googl/lo8yz123";

function InvestmentProofInput() {
  const { personData, setPersonData } = useOnboardingContext();

  const { field } = useController({
    name,
    rules: {
      required: true,
    },
    defaultValue: (personData as OtherPersonData)?.[name] || "",
    shouldUnregister: true,
  });

  useEffect(() => {
    return () =>
      setPersonData(
        (prev) =>
          ({
            ...prev,
            [name]: field.value,
          } as OtherPersonData)
      );
  }, [field.value, setPersonData]);

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

export default memo(InvestmentProofInput);
