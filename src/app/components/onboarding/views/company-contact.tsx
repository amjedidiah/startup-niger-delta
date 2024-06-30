import useOnboardingContext from "@/hooks/use-onboarding-context";
import { ContactData } from "@/lib/types";
import { memo, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CompanyEmailInput from "@/components/onboarding/inputs/company-contact/company-email-input";
import CompanyWebsiteInput from "@/components/onboarding/inputs/company-contact/company-website-input";
import CompanyAddressInput from "@/components/onboarding/inputs/company-contact/company-address-input";
import CompanyPhoneInput from "@/components/onboarding/inputs/company-contact/company-phone-input";

function CompanyContact() {
  const { contactData, setContactData, setCanGoToPersonProfile } =
    useOnboardingContext();

  const formValues = useForm<ContactData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: contactData,
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

  return (
    <FormProvider {...formValues}>
      <CompanyEmailInput />
      <CompanyWebsiteInput />
      <CompanyAddressInput />
      <CompanyPhoneInput />
    </FormProvider>
  );
}

export default memo(CompanyContact);
