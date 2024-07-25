import { useEffect, useMemo } from "react";
import useOnboardingContext from "./use-onboarding-context";
import { ProfileData, UserTypes } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function useCompanyProfile() {
  const { profileData, setProfileData, setCanGoToCompanyContact, userType } =
    useOnboardingContext();
  const isStartUp = useMemo(() => userType === UserTypes.StartUp, [userType]);
  const isAngelInvestor = useMemo(
    () => userType === UserTypes.AngelInvestor,
    [userType]
  );
  const formValues = useForm<ProfileData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: profileData,
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
    isStartUp,
    setProfileData,
    isAngelInvestor,
  };
}
