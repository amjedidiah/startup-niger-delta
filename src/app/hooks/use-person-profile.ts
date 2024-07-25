import { useEffect, useMemo } from "react";
import useOnboardingContext from "./use-onboarding-context";
import { useForm } from "react-hook-form";
import { PersonData, UserTypes } from "@/lib/types";

export default function usePersonProfile() {
  const { userType, personData, setPersonData, setCanGoToIdentification } =
    useOnboardingContext();
  const isStartUp = useMemo(() => userType === UserTypes.StartUp, [userType]);
  const formValues = useForm<PersonData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: personData,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !personData);

  const personNameLabel = useMemo(
    () =>
      ({
        [UserTypes.AngelInvestor]: "Angel Name",
        [UserTypes.Others]: "Principal Promoter Name",
        [UserTypes.StartUp]: "Founder's Name",
        [UserTypes.VentureCapitalist]: "General Partner Name",
      }[userType] || "Full Name"),
    [userType]
  );

  useEffect(() => {
    return () => setPersonData(getValues());
  }, [getValues, setPersonData]);

  useEffect(
    () => setCanGoToIdentification(!isDisabled),
    [isDisabled, setCanGoToIdentification]
  );

  return { formValues, personData, setPersonData, isStartUp, personNameLabel };
}
