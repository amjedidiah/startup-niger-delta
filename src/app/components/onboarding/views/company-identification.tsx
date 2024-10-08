import Input from "@/components/shared/form-fields/input";
import Select from "@/components/shared/form-fields/select";
import TextArea from "@/components/shared/form-fields/text-area";
import ShouldRender from "@/components/shared/should-render";
import useCompanyIdentification from "@/hooks/use-company-identification";
import { defaultInputRules } from "@/lib/constants";
import { memo } from "react";
import { FormProvider } from "react-hook-form";
import countryList from "react-select-country-list";

const nationalityOptions = countryList().getData();

const identificationMeansOptions = [
  { value: "nin", label: "NIN" },
  { value: "bvn", label: "BVN" },
  { value: "ipn", label: "International Passport number" },
];

const fileOptions = {
  maxFiles: 1,
  multiple: false,
  clientAllowedFormats: ["png"],
};

function CompanyIdentification() {
  const { formValues, identificationData, setIdentificationData, isStartup } =
    useCompanyIdentification();

  return (
    <FormProvider {...formValues}>
      <ShouldRender condition={isStartup}>
        <Input
          dataStore={identificationData}
          dataStoreSetter={setIdentificationData}
          name="cacCertificateUrl"
          rules={defaultInputRules}
          type="file"
          fileOptions={fileOptions}
        />
        <Input
          dataStore={identificationData}
          dataStoreSetter={setIdentificationData}
          name="companyLogoUrl"
          rules={defaultInputRules}
          type="file"
          fileOptions={fileOptions}
        />
      </ShouldRender>
      <ShouldRender condition={!isStartup}>
        <Select
          dataStore={identificationData}
          dataStoreSetter={setIdentificationData}
          name="identificationMeans"
          rules={defaultInputRules}
          placeholder="Choose verification method"
          options={identificationMeansOptions}
        />
        <Select
          dataStore={identificationData}
          dataStoreSetter={setIdentificationData}
          name="nationality"
          rules={defaultInputRules}
          placeholder="Country"
          options={nationalityOptions}
        />
        <TextArea
          dataStore={identificationData}
          dataStoreSetter={setIdentificationData}
          name="identificationMessage"
          rules={defaultInputRules}
          placeholder="Body"
        />
      </ShouldRender>
    </FormProvider>
  );
}

export default memo(CompanyIdentification);
