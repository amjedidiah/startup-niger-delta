import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import usePersonProfile from "@/hooks/use-person-profile";
import Input from "@/components/shared/form-fields/input";
import { defaultOnboardingInputRules } from "@/lib/constants";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import Select from "@/components/shared/form-fields/select";

const noOfFoundersOptions = Array(10)
  .fill(0)
  .map((_item, i) => ({ label: i + 1 + "", value: i + 1 + "" }));
const personNameRules = (label: string) => ({
  ...defaultOnboardingInputRules,
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

const founderEmailRules = {
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

const founderPhoneRules = {
  ...defaultOnboardingInputRules,
  validate: (value: string) =>
    isPossiblePhoneNumber(value) || "Invalid phone number",
};

function PersonProfile() {
  const { formValues, personData, setPersonData, isStartup, keyLabels } =
    usePersonProfile();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={personData}
        name="personName"
        rules={personNameRules(keyLabels["personName"])}
        aria-label={keyLabels["personName"]}
        autoComplete="billing name"
        placeholder="Full name"
      />
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderEmail"
          type="email"
          placeholder="username@domain.com"
          aria-label={keyLabels["founderEmail"]}
          autoComplete="home email"
          rules={founderEmailRules}
        />
        <TextArea
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderAddress"
          rules={defaultOnboardingInputRules}
          placeholder="Address Information"
          aria-label={keyLabels["founderAddress"]}
        />
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderPhoneNumber"
          type="tel"
          aria-label={keyLabels["founderPhoneNumber"]}
          rules={founderPhoneRules}
          defaultCountry="NG"
          international
        />
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="noOfFounders"
          rules={defaultOnboardingInputRules}
          aria-label={keyLabels["noOfFounders"]}
          placeholder="Choose Number of CoFounders"
          options={noOfFoundersOptions}
        />
      </ShouldRender>

      <ShouldRender condition={!isStartup}>
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentExperience"
          rules={defaultOnboardingInputRules}
          aria-label={keyLabels["investmentExperience"]}
          placeholder="Choose investment experience"
          options={investmentExperienceOptions}
        />
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentProof"
          type="url"
          aria-label={keyLabels["investmentProof"]}
          placeholder="Eg: https://docs.googl/lo8yz123"
          rules={defaultOnboardingInputRules}
        />
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentSize"
          rules={defaultOnboardingInputRules}
          aria-label={keyLabels["investmentSize"]}
          placeholder="Choose investment size"
          options={investmentSizeOptions}
        />
      </ShouldRender>
    </FormProvider>
  );
}

export default memo(PersonProfile);
