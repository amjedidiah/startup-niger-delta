import { useEffect, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ProfileData, UserTypes } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function useCompanyProfile() {
  const {
    profileData,
    setProfileData,
    setCanGoToCompanyContact,
    userType,
    keyLabels,
  } = useOnboardingContext();
  const isStartup = useMemo(() => userType === UserTypes.StartUp, [userType]);
  const formValues = useForm<ProfileData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: profileData,
    shouldUnregister: true,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !profileData);

  useEffect(() => {
    return () => setProfileData(getValues());
  }, [getValues, setProfileData]);

  useEffect(
    () => setCanGoToCompanyContact(!isDisabled),
    [isDisabled, setCanGoToCompanyContact]
  );

  return {
    formValues,
    profileData,
    isStartup,
    setProfileData,
    keyLabels,
  };
}
