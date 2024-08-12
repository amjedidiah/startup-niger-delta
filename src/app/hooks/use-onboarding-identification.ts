import { useEffect, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { IdentificationData, UserTypes } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function useOnboardingIdentification() {
  const {
    userType,
    identificationData,
    setIdentificationData,
    setCanGoToReview,
    keyLabels,
  } = useOnboardingContext();
  const isStartup = useMemo(() => userType === UserTypes.StartUp, [userType]);
  const formValues = useForm<IdentificationData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: identificationData,
    shouldUnregister: true,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !identificationData);

  useEffect(() => {
    return () => setIdentificationData(getValues());
  }, [getValues, setIdentificationData]);

  useEffect(
    () => setCanGoToReview(!isDisabled),
    [isDisabled, setCanGoToReview]
  );

  return {
    formValues,
    identificationData,
    setIdentificationData,
    isStartup,
    keyLabels,
  };
}
