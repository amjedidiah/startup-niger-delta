import { memo } from "react";
import { FormProvider } from "react-hook-form";
import ShouldRender from "@/components/shared/should-render";
import Input from "@/components/shared/form-fields/input";
import TextArea from "@/components/shared/form-fields/text-area";
import Select from "@/components/shared/form-fields/select";
import countryList from "react-select-country-list";
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

const nationalityOptions = countryList().getData();

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
  const {
    formValues,
    profileData,
    isStartUp,
    setProfileData,
    isAngelInvestor,
  } = useCompanyProfile();

  return (
    <FormProvider {...formValues}>
      <Input
        dataStore={profileData}
        name="companyName"
        rules={companyNameRules}
        aria-label={`Company ${isAngelInvestor ? "/ Individual" : ""} Name`}
        placeholder="Registered name"
        autoComplete=""
      />
      <ShouldRender condition={isStartUp}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="yearsOfInc"
          rules={yearsOfIncRules}
          aria-label="Year of Incorporation"
          type="date"
          autoComplete="bday-day"
          shouldUnregister
        />
      </ShouldRender>
      <ShouldRender condition={!isStartUp}>
        <Select
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="nationality"
          rules={defaultOnboardingInputRules}
          aria-label="Nationality"
          placeholder="Country of Origin"
          options={nationalityOptions}
          shouldUnregister
        />
      </ShouldRender>
      <ShouldRender condition={!isAngelInvestor}>
        <Input
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="rcNumber"
          rules={defaultOnboardingInputRules}
          aria-label="RC Number"
          placeholder="Registration number"
          shouldUnregister
        />
      </ShouldRender>
      <ShouldRender condition={isStartUp}>
        <Select
          dataStore={profileData}
          dataStoreSetter={setProfileData}
          name="industry"
          rules={defaultOnboardingInputRules}
          aria-label="Industry"
          placeholder="Select your industry"
          options={industryOptions}
          shouldUnregister
        />
      </ShouldRender>
      <TextArea
        dataStore={profileData}
        name="companyDescription"
        rules={companyDescriptionRules}
        aria-label={`${isStartUp ? "Startup" : "Business"} Description`}
        placeholder="Solution"
      />
    </FormProvider>
  );
}

export default memo(CompanyProfile);
