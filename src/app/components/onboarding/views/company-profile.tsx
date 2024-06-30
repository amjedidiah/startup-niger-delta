import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ProfileData, UserTypes } from "@/lib/types";
import { memo, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CompanyNameInput from "@/components/onboarding/inputs/company-profile/company-name-input";
import YearsOfIncInput from "@/components/onboarding/inputs/company-profile/years-of-inc-input";
import NationalityInput from "@/components/onboarding/inputs/company-profile/nationality-input";
import RcNumberInput from "@/components/onboarding/inputs/company-profile/rc-number-input";
import IndustryInput from "@/components/onboarding/inputs/company-profile/industry-input";
import CompanyDescriptionInput from "@/components/onboarding/inputs/company-profile/company-description-input";
import ShouldRender from "@/components/shared/should-render";

function CompanyProfile() {
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

  return (
    <FormProvider {...formValues}>
      <CompanyNameInput />
      <ShouldRender condition={isStartUp}>
        <YearsOfIncInput />
      </ShouldRender>
      <ShouldRender condition={!isStartUp}>
        <NationalityInput />
      </ShouldRender>
      <ShouldRender condition={!isAngelInvestor}>
        <RcNumberInput />
      </ShouldRender>
      <ShouldRender condition={isStartUp}>
        <IndustryInput />
      </ShouldRender>
      <CompanyDescriptionInput />
    </FormProvider>
  );
}

export default memo(CompanyProfile);
