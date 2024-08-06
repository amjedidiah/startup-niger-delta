import { useEffect, useMemo } from "react";
import useOnboardingContext from "@/hooks/use-onboarding-context";
import { useForm } from "react-hook-form";
import { RepresentativeData, CompanyTypes } from "@/lib/types";

export default function useCompanyRepresentative() {
  const {
    onboardingData: { representativeData },
    onboardingDataSetters: { setRepresentativeData },
    setCanGoToIdentificationData,
    companyType,
    keyLabels,
  } = useOnboardingContext();
  const isStartup = useMemo(
    () => companyType === CompanyTypes.StartUp,
    [companyType]
  );
  const formValues = useForm<RepresentativeData>({
    mode: "onChange",
    shouldFocusError: true,
    defaultValues: representativeData,
    shouldUnregister: true,
  });
  const {
    formState: { isValid, isDirty },
    getValues,
  } = formValues;
  const isDisabled = !isValid || (!isDirty && !representativeData);

  useEffect(() => {
    return () => setRepresentativeData(getValues());
  }, [getValues, setRepresentativeData]);

  useEffect(
    () => setCanGoToIdentificationData(!isDisabled),
    [isDisabled, setCanGoToIdentificationData]
  );

  return {
    formValues,
    representativeData,
    setRepresentativeData,
    isStartup,
    keyLabels,
  };
}
