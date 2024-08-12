import { useEffect, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ProfileData, CompanyTypes } from "@/lib/types";
import { useForm } from "react-hook-form";

export default function useCompanyProfile() {
  const {
    onboardingData: { profileData },
    onboardingDataSetters: { setProfileData },
    setCanGoToContactData,
    companyType,
    keyLabels,
  } = useOnboardingContext();
  const isStartup = useMemo(
    () => companyType === CompanyTypes.StartUp,
    [companyType]
  );
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
    () => setCanGoToContactData(!isDisabled),
    [isDisabled, setCanGoToContactData]
  );

  return {
    formValues,
    profileData,
    isStartup,
    setProfileData,
    keyLabels,
  };
}
