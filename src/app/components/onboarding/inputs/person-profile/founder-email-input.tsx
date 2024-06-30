import OnboardingInputContainer from "@/components/onboarding/shared/onboarding-input-container";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { StartUpPersonData } from "@/lib/types";
import { memo } from "react";
import { useController } from "react-hook-form";

const name = "founderEmail";
const label = "Founder's Email";
const placeholder = "username@domain.com";

function FounderEmailInput() {
  const { personData } = useOnboardingContext();

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
    defaultValue: (personData as StartUpPersonData)?.[name] || "",
    shouldUnregister: true,
  });

  return (
    <OnboardingInputContainer label={label} name={name}>
      <input
        type="email"
        id={name}
        placeholder={placeholder}
        aria-label={label}
        autoComplete="work email"
        {...field}
      />
    </OnboardingInputContainer>
  );
}

export default memo(FounderEmailInput);
