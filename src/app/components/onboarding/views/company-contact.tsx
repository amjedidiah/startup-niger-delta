import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { defaultOnboardingInputRules } from "@/lib/constants";
import useCompanyContact from "@/hooks/use-company-contact";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const companyEmailRules = {
  ...defaultOnboardingInputRules,
  validate: (value: string) =>
    Boolean(
      String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) || "Invalid email address",
};

const companyWebsiteRules = {
  ...defaultOnboardingInputRules,
  validate: (value: string) =>
    Boolean(
      String(value)
        .toLowerCase()
        .match(/^www\.[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/)
    ) || "Invalid website",
};

const companyPhoneRules = {
  ...defaultOnboardingInputRules,
  validate: (value: string) =>
    isPossiblePhoneNumber(value) || "Invalid phone number",
};

function CompanyContact() {
  const { formValues, contactData } = useCompanyContact();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={contactData}
        name="companyEmail"
        rules={companyEmailRules}
        aria-label="Company Email"
        type="email"
        autoComplete="email"
        placeholder="username@domain.com"
      />
      <Input
        dataStore={contactData}
        name="companyWebsite"
        rules={companyWebsiteRules}
        aria-label="Company Website"
        type="url"
        placeholder="www.website.com"
      />
      <TextArea
        dataStore={contactData}
        name="companyAddress"
        rules={defaultOnboardingInputRules}
        aria-label="Company Address"
        placeholder="Address Information"
      />
      <Input
        dataStore={contactData}
        aria-label="Company Phone Number"
        type="tel"
        name="companyPhoneNumber"
        rules={companyPhoneRules}
        defaultCountry="NG"
        international
      />
    </FormProvider>
  );
}

export default memo(CompanyContact);
