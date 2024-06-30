import useOnboardingContext from "@/hooks/use-onboarding-context";
import { PersonData, UserTypes } from "@/lib/types";
import { memo, useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import PersonNameInput from "@/components/onboarding/inputs/person-profile/person-name-input";
import ShouldRender from "@/components/shared/should-render";
import FounderEmailInput from "@/components/onboarding/inputs/person-profile/founder-email-input";
import FounderAddressInput from "@/components/onboarding/inputs/person-profile/founder-address-input";
import FounderPhoneInput from "@/components/onboarding/inputs/person-profile/founder-phone-input";
import CoFoundersInput from "@/components/onboarding/inputs/person-profile/co-founders-input";
import InvestmentExperienceInput from "@/components/onboarding/inputs/person-profile/investment-experience-input";
import InvestmentProofInput from "@/components/onboarding/inputs/person-profile/investment-proof-input";
import InvestmentSizeInput from "@/components/onboarding/inputs/person-profile/investment-size-input";

function PersonProfile() {
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

  useEffect(() => {
    return () => setPersonData(getValues());
  }, [getValues, setPersonData]);

  useEffect(
    () => setCanGoToIdentification(!isDisabled),
    [isDisabled, setCanGoToIdentification]
  );

  return (
    <FormProvider {...formValues}>
      <PersonNameInput />
      <ShouldRender condition={isStartUp}>
        <FounderEmailInput />
        <FounderAddressInput />
        <FounderPhoneInput />
        <CoFoundersInput />
      </ShouldRender>

      <ShouldRender condition={!isStartUp}>
        <InvestmentExperienceInput />
        <InvestmentProofInput />
        <InvestmentSizeInput />
      </ShouldRender>
    </FormProvider>
  );
}

export default memo(PersonProfile);
