import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { defaultInputRules, emailRules } from "@/lib/constants";
import useCompanyContact from "@/hooks/use-company-contact";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const companyWebsiteRules = {
  ...defaultInputRules,
  validate: (value: string) =>
    Boolean(
      String(value)
        .toLowerCase()
        .match(/^www\.[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/)
    ) || "Invalid website",
};

const companyPhoneRules = {
  ...defaultInputRules,
  validate: (value: string) =>
    isPossiblePhoneNumber(value) || "Invalid phone number",
};

function CompanyContact() {
  const { formValues, contactData, keyLabels } = useCompanyContact();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={contactData}
        name="companyEmail"
        rules={emailRules}
        aria-label={keyLabels["companyEmail"]}
        type="email"
        autoComplete="work email"
        placeholder="username@domain.com"
      />
      <Input
        dataStore={contactData}
        aria-label={keyLabels["companyPhoneNumber"]}
        type="tel"
        name="companyPhoneNumber"
        rules={companyPhoneRules}
        defaultCountry="NG"
        international
      />
      <TextArea
        dataStore={contactData}
        name="companyAddress"
        rules={defaultInputRules}
        aria-label={keyLabels["companyAddress"]}
        placeholder="Address Information"
      />
      <Input
        dataStore={contactData}
        name="companyWebsite"
        rules={companyWebsiteRules}
        aria-label={keyLabels["companyWebsite"]}
        type="url"
        placeholder="www.website.com"
      />
    </FormProvider>
  );
}

export default memo(CompanyContact);
