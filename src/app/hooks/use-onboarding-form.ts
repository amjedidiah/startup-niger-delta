import { FormEventHandler, useCallback, useMemo, useState } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import { CompanyTypes } from "@/lib/types";
import { handleOnboardingData } from "@/lib/actions/db";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useOnboardingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    activeStepIndex,
    setActiveStepIndex,
    stepTitles,
    canGoNext,
    hasAgreed,
    setHasAgreed,
    companyType,
    onboardingData,
  } = useOnboardingContext();
  const companyTypes = useMemo(() => Object.values(CompanyTypes), []);

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
    async (e) => {
      try {
        const isStartUp = companyType === CompanyTypes.StartUp;
        e.preventDefault();

        if (!canGoNext) return;
        if (!shouldSubmit) return setActiveStepIndex((prev) => prev + 1);

        if (!hasAgreed) return;

        // Submit data to BE
        setIsLoading(true);
        await handleOnboardingData(onboardingData, isStartUp);
        router.push("/dashboard");
      } catch (error) {
        console.error(error);
        if (error instanceof Error)
          toast.error("Error saving onboarding data!");
        setIsLoading(false);
      }
    },
    [
      canGoNext,
      companyType,
      hasAgreed,
      onboardingData,
      router,
      setActiveStepIndex,
      shouldSubmit,
    ]
  );

  return {
    companyTypes,
    shouldSubmit,
    hasAgreed,
    canGoBack,
    canGoNext,
    handleBack,
    handleNext,
    setHasAgreed,
    stepTitles,
    activeStepIndex,
    isLoading,
  };
}
