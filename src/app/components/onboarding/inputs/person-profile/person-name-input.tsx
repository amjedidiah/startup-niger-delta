import { UserTypes } from "@/lib/types";
import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { memo, useMemo } from "react";
import { useController } from "react-hook-form";

const name = "personName";
const initLabel = "Full Name";
const placeholder = "Full name";

function PersonNameInput() {
  const { userType, personData } = useOnboardingContext();
  const label = useMemo(
    () =>
      ({
        [UserTypes.AngelInvestor]: "Angel Name",
        [UserTypes.Others]: "Principal Promoter Name",
        [UserTypes.StartUp]: "Founder's Name",
        [UserTypes.VentureCapitalist]: "General Partner Name",
      }[userType] || initLabel),
    [userType]
  );

  const { field } = useController({
    name,
    rules: {
      required: true,
      minLength: {
        message: `Invalid ${label.toLowerCase()}`,
        value: 5,
      },
    },
    defaultValue: personData?.[name] || "",
  });

  return (
    <OnboardingInputContainer label={label} name={name}>
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

export default memo(PersonNameInput);
