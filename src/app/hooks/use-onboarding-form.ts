import { FormEventHandler, useCallback, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import { UserTypes } from "@/lib/types";

export default function useOnboardingForm() {
  const {
    activeStepIndex,
    setActiveStepIndex,
    stepTitles,
    canGoNext,
    hasAgreed,
    setHasAgreed,
  } = useOnboardingContext();
  const userTypes = useMemo(() => Object.values(UserTypes), []);

  const canGoBack = useMemo(
    () => activeStepIndex > INIT_ONBOARDING_STEP_INDEX,
    [activeStepIndex]
  );
  const shouldSubmit = useMemo(
    () => activeStepIndex >= stepTitles.length,
    [activeStepIndex, stepTitles.length]
  );

  const handleBack = useCallback(() => {
    if (canGoBack) setActiveStepIndex((prev) => prev - 1);
  }, [canGoBack, setActiveStepIndex]);
  const handleNext: FormEventHandler = useCallback(
    (e) => {
      e.preventDefault();

      if (!canGoNext) return;
      if (!shouldSubmit) return setActiveStepIndex((prev) => prev + 1);

      if (!hasAgreed) return;

      // Submit data to BE
      console.info("Submitting...");
    },
    [canGoNext, hasAgreed, setActiveStepIndex, shouldSubmit]
  );

  return {
    userTypes,
    shouldSubmit,
    hasAgreed,
    canGoBack,
    canGoNext,
    handleBack,
    handleNext,
    setHasAgreed,
    stepTitles,
    activeStepIndex,
  };
}
