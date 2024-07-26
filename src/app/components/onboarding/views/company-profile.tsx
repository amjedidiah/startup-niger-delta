import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import Select from "@/components/shared/form-fields/select";
import useCompanyProfile from "@/hooks/use-company-profile";
import { defaultOnboardingInputRules } from "@/lib/constants";

const companyNameRules = {
  ...defaultOnboardingInputRules,
  minLength: {
    message: "Invalid company name",
    value: 2,
  },
};

const yearsOfIncRules = {
  ...defaultOnboardingInputRules,
  validate: (value: string) => {
    const now = Math.floor(new Date().getTime() / 1000 / 3600 / 24);
    const incDate = Math.floor(new Date(value).getTime() / 1000 / 3600 / 24);

    return now > incDate || "Invalid year of incorporation";
  },
};

const industryOptions = [
  {
    value: "it",
    label: "IT",
  },
  {
    value: "health",
    label: "Health",
  },
];

const companyDescriptionRules = {
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
        name="companyName"
        rules={companyNameRules}
        aria-label={keyLabels["companyName"]}
        placeholder="Registered name"
        autoComplete="additional-name"
      />
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="yearsOfInc"
          rules={yearsOfIncRules}
          aria-label={keyLabels["yearsOfInc"]}
          type="date"
          autoComplete="bday-day"
        />
      </ShouldRender>
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="rcNumber"
          rules={defaultOnboardingInputRules}
          aria-label={keyLabels["rcNumber"]}
          placeholder="Registration number"
        />
      </ShouldRender>
      <Select
        dataStore={profileData}
        name="industry"
        rules={defaultOnboardingInputRules}
        aria-label={keyLabels["industry"]}
        placeholder="Select your industry"
        options={industryOptions}
      />
      <TextArea
        dataStore={profileData}
        name="companyDescription"
        rules={companyDescriptionRules}
        aria-label={keyLabels["companyDescription"]}
        placeholder="Your solution in one sentence"
      />
      <Input
        dataStore={profileData}
        name="fundingInterest"
        rules={defaultOnboardingInputRules}
        aria-label={keyLabels["fundingInterest"]}
        placeholder="Investment Interest"
      />
    </FormProvider>
  );
}

export default memo(CompanyProfile);
