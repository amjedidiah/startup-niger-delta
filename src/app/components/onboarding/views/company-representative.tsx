import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import useCompanyRepresentative from "@/hooks/use-company-representative";
import Input from "@/components/shared/form-fields/input";
import { defaultInputRules, emailRules } from "@/lib/constants";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import Select from "@/components/shared/form-fields/select";

const noOfFoundersOptions = Array(10)
  .fill(0)
  .map((_item, i) => ({ label: i + 1 + "", value: i + 1 + "" }));
const representativeNameRules = (label: string) => ({
  ...defaultInputRules,
  minLength: {
    message: `Invalid ${label.toLowerCase()}`,
    value: 5,
  },
});

const investmentExperienceOptions = [
  { value: "experience-1", label: "0 - 1 year" },
  { value: "experience-2", label: "2 - 5 years" },
  { value: "experience-3", label: "5+ years" },
];

const investmentSizeOptions = [
  { value: "investment-1", label: "Less than $100k" },
  { value: "investment-2", label: "$100k and more" },
];

const founderPhoneRules = {
  ...defaultInputRules,
  validate: (value: string) =>
    isPossiblePhoneNumber(value) || "Invalid phone number",
};

function CompanyRepresentative() {
  const {
    formValues,
    representativeData,
    setRepresentativeData,
    isStartup,
    keyLabels,
  } = useCompanyRepresentative();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={representativeData}
        name="representativeName"
        rules={representativeNameRules(keyLabels["representativeName"])}
        autoComplete="billing name"
        placeholder="Full name"
      />
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="founderEmail"
          type="email"
          placeholder="username@domain.com"
          autoComplete="home email"
          rules={emailRules}
        />
        <TextArea
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="founderAddress"
          rules={defaultInputRules}
          placeholder="Address Information"
        />
        <Input
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="founderPhoneNumber"
          type="tel"
          rules={founderPhoneRules}
          defaultCountry="NG"
          international
        />
        <Select
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="noOfFounders"
          rules={defaultInputRules}
          placeholder="Choose Number of Founders"
          options={noOfFoundersOptions}
        />
      </ShouldRender>

      <ShouldRender condition={!isStartup}>
        <Select
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="investmentExperience"
          rules={defaultInputRules}
          placeholder="Choose investment experience"
          options={investmentExperienceOptions}
        />
        <Input
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="investmentProof"
          type="url"
          placeholder="Eg: https://docs.googl/lo8yz123"
          rules={defaultInputRules}
        />
        <Select
          dataStore={representativeData}
          dataStoreSetter={setRepresentativeData}
          name="investmentSize"
          rules={defaultInputRules}
          placeholder="Choose investment size"
          options={investmentSizeOptions}
        />
      </ShouldRender>
    </FormProvider>
  );
}

export default memo(CompanyRepresentative);
