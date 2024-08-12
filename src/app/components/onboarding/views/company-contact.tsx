import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { defaultInputRules, emailRules } from "@/lib/constants";
import useCompanyContact from "@/hooks/use-company-contact";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const websiteRules = {
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
        name="email"
        rules={emailRules}
        aria-label={keyLabels["email"]}
        type="email"
        autoComplete="work email"
        placeholder="username@domain.com"
      />
      <Input
        dataStore={contactData}
        aria-label={keyLabels["phoneNumber"]}
        type="tel"
        name="phoneNumber"
        rules={companyPhoneRules}
        defaultCountry="NG"
        international
      />
      <TextArea
        dataStore={contactData}
        name="address"
        rules={defaultInputRules}
        aria-label={keyLabels["address"]}
        placeholder="Address Information"
      />
      <Input
        dataStore={contactData}
        name="website"
        rules={websiteRules}
        aria-label={keyLabels["website"]}
        type="url"
        placeholder="www.website.com"
      />
    </FormProvider>
  );
}

export default memo(CompanyContact);
