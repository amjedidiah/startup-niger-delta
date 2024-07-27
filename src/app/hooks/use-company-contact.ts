import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ContactData } from "@/lib/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function useCompanyContact() {
  const { contactData, setContactData, setCanGoToPersonProfile, keyLabels } =
    useOnboardingContext();

  const formValues = useForm<ContactData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: contactData,
    shouldUnregister: true,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !contactData);

  useEffect(() => {
    return () => setContactData(getValues());
  }, [getValues, setContactData]);

  useEffect(
    () => setCanGoToPersonProfile(!isDisabled),
    [isDisabled, setCanGoToPersonProfile]
  );

  return { formValues, contactData, setContactData, keyLabels };
}
