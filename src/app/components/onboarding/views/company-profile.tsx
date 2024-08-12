import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import Select from "@/components/shared/form-fields/select";
import useCompanyProfile from "@/hooks/use-company-profile";
import { defaultInputRules, industryOptions } from "@/lib/constants";

const nameRules = {
  ...defaultInputRules,
  minLength: {
    message: "Invalid company name",
    value: 2,
  },
};

const yearOfIncRules = {
  ...defaultInputRules,
  validate: (value: string) => {
    const now = Math.floor(new Date().getTime() / 1000 / 3600 / 24);
    const incDate = Math.floor(new Date(value).getTime() / 1000 / 3600 / 24);

    return now > incDate || "Invalid year of incorporation";
  },
};

const descriptionRules = {
  required: true,
  minLength: {
    value: 50,
    message: "Company description must be at least 50 characters long",
  },
};

function CompanyProfile() {
  const { formValues, profileData, isStartup, setProfileData, keyLabels } =
    useCompanyProfile();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={profileData}
        name="name"
        rules={nameRules}
        aria-label={keyLabels["name"]}
        placeholder="Registered name"
        autoComplete="additional-name"
      />
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="yearOfInc"
          rules={yearOfIncRules}
          aria-label={keyLabels["yearOfInc"]}
          type="date"
          autoComplete="bday-day"
        />
      </ShouldRender>
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="rcNumber"
          rules={defaultInputRules}
          aria-label={keyLabels["rcNumber"]}
          placeholder="Registration number"
        />
      </ShouldRender>
      <Select
        dataStore={profileData}
        name="industry"
        rules={defaultInputRules}
        aria-label={keyLabels["industry"]}
        placeholder="Select your industry"
        options={industryOptions}
      />
      <TextArea
        dataStore={profileData}
        name="description"
        rules={descriptionRules}
        aria-label={keyLabels["description"]}
        placeholder="Your solution in one sentence"
      />
      <Input
        dataStore={profileData}
        name="fundingInterest"
        rules={defaultInputRules}
        aria-label={keyLabels["fundingInterest"]}
        placeholder="Investment Interest"
      />
    </FormProvider>
  );
}

export default memo(CompanyProfile);
