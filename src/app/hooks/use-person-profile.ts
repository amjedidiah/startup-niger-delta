import { useEffect, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { useForm } from "react-hook-form";
import { PersonData, UserTypes } from "@/lib/types";

export default function usePersonProfile() {
  const {
    personData,
    setPersonData,
    setCanGoToIdentification,
    userType,
    keyLabels,
  } = useOnboardingContext();
  const isStartup = useMemo(() => userType === UserTypes.StartUp, [userType]);
  const formValues = useForm<PersonData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: personData,
    shouldUnregister: true,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !personData);

  useEffect(() => {
    return () => setPersonData(getValues());
  }, [getValues, setPersonData]);

  useEffect(
    () => setCanGoToIdentification(!isDisabled),
    [isDisabled, setCanGoToIdentification]
  );

  return { formValues, personData, setPersonData, isStartup, keyLabels };
}
