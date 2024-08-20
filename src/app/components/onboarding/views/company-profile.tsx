import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import Select from "@/components/shared/form-fields/select";
import useCompanyProfile from "@/hooks/use-company-profile";
import {
  defaultInputRules,
  fundingInterestOptions,
  industryOptions,
} from "@/lib/constants";

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
  const { formValues, profileData, isStartup, setProfileData } =
    useCompanyProfile();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={profileData}
        name="name"
        rules={nameRules}
        placeholder="Registered name"
        autoComplete="additional-name"
      />
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="yearOfInc"
          rules={yearOfIncRules}
          type="date"
          autoComplete="bday-day"
        />
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="rcNumber"
          rules={defaultInputRules}
          placeholder="Registration number"
        />
        <Select
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="industry"
          rules={defaultInputRules}
          placeholder="Select your Industry"
          options={industryOptions}
        />
      </ShouldRender>
      <ShouldRender condition={!isStartup}>
        <Select
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="industryInterests"
          rules={defaultInputRules}
          placeholder="Select your Industry interests"
          options={industryOptions}
          isMulti
        />
      </ShouldRender>
      <TextArea
        dataStore={profileData}
        name="description"
        rules={descriptionRules}
        placeholder="Your solution in one sentence"
      />
      <Select
        dataStore={profileData}
        name="fundingInterests"
        rules={defaultInputRules}
        placeholder="Select your Funding Interests"
        options={fundingInterestOptions}
        isMulti
      />
    </FormProvider>
  );
}

export default memo(CompanyProfile);
