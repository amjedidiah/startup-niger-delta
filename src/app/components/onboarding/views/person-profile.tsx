import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import usePersonProfile from "@/hooks/use-person-profile";
import Input from "@/components/shared/form-fields/input";
import { defaultOnboardingInputRules } from "@/lib/constants";
import TextArea from "@/components/shared/form-fields/text-area";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import Select from "@/components/shared/form-fields/select";

const noOfCoFoundersOptions = Array(10)
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
  { value: "experience-1", label: "Experience 1" },
  { value: "experience-2", label: "Experience 2" },
];

const investmentSizeOptions = [
  { value: "investment-1", label: "Investment 1" },
  { value: "investment-2", label: "Investment 2" },
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
  const { formValues, personData, setPersonData, isStartUp, personNameLabel } =
    usePersonProfile();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={personData}
        name="personName"
        rules={personNameRules(personNameLabel)}
        aria-label={personNameLabel}
        autoComplete="name"
        placeholder="Full name"
      />
      <ShouldRender condition={isStartUp}>
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderEmail"
          type="email"
          placeholder="username@domain.com"
          aria-label="Founder's Email"
          autoComplete="work email"
          rules={founderEmailRules}
          shouldUnregister
        />
        <TextArea
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderAddress"
          rules={defaultOnboardingInputRules}
          shouldUnregister
          placeholder="Address Information"
          aria-label="Founder's Address"
        />
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="founderPhoneNumber"
          type="tel"
          aria-label="Founder's Phone Number"
          rules={founderPhoneRules}
          defaultCountry="NG"
          international
          shouldUnregister
        />
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="noOfCoFounders"
          rules={defaultOnboardingInputRules}
          aria-label="No of Co-founders"
          placeholder="Choose Number of CoFounders"
          options={noOfCoFoundersOptions}
          shouldUnregister
        />
      </ShouldRender>

      <ShouldRender condition={!isStartUp}>
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentExperience"
          rules={defaultOnboardingInputRules}
          aria-label="Investment Experience"
          placeholder="Choose investment experience"
          options={investmentExperienceOptions}
          shouldUnregister
        />
        <Input
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentProof"
          type="url"
          aria-label="Investment Proof"
          placeholder="Eg: https://docs.googl/lo8yz123"
          rules={defaultOnboardingInputRules}
          shouldUnregister
        />
        <Select
          dataStore={personData}
          dataStoreSetter={setPersonData}
          name="investmentSize"
          rules={defaultOnboardingInputRules}
          aria-label="Investment Size"
          placeholder="Choose investment size"
          options={investmentSizeOptions}
          shouldUnregister
        />
      </ShouldRender>
    </FormProvider>
  );
}

export default memo(PersonProfile);
