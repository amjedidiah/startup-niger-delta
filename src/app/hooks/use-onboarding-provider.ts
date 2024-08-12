import { INIT_ONBOARDING_STEP_INDEX, userSteps } from "@/lib/constants";
import { OnboardingContextType, CompanyTypes } from "@/lib/types";
import { useMemo, useState } from "react";
import useOnboardingData from "@/hooks/use-onboarding-data";

const getRepresentativeNameLabel = (companyType: CompanyTypes) =>
  ({
    [CompanyTypes.AngelInvestor]: "Angel",
    [CompanyTypes.Others]: "Principal Promoter",
    [CompanyTypes.StartUp]: "Founder's Name",
    [CompanyTypes.VentureCapitalist]: "General Partner",
  }[companyType] || "Full Name");

const getOnboardingKeyLabels = (companyType: CompanyTypes) => ({
  name: `Company ${
    companyType === CompanyTypes.AngelInvestor ? "/ Individual" : ""
  } Name`,
  yearOfInc: "Years of Incorporation",
  rcNumber: "RC Number",
  industry: "Industry",
  description: `${
    companyType === CompanyTypes.StartUp ? "Startup" : "Business"
  } Description`,
  fundingInterest: "Funding Interest",

  email: "Company Email",
  phoneNumber: "Company Phone Number",
  address: "Company Address",
  website: "Company Website",

  representativeName: getRepresentativeNameLabel(companyType),
  founderEmail: "Founder's Email",
  founderAddress: "Founder's Address",
  founderPhoneNumber: "Founder's Phone",
  noOfFounders: "No of Founders",
  investmentExperience: "Investment Experience",
  investmentProof: "Investment Proof",
  investmentSize: "Investment Size",

  cacCertificateUrl: "CAC Certificate",
  companyLogoUrl: "Company Logo",
  identificationMeans: "Means of Identification",
  nationality: "Nationality",
  identificationMessage: "Message",
});

const getCanGoNext = ({
  activeStepIndex,
  canGoToContactData,
  canGoToRepresentativeData,
  canGoToIdentificationData,
  canGoToReview,
  hasAgreed,
}: {
  activeStepIndex: number;
  canGoToContactData: boolean;
  canGoToRepresentativeData: boolean;
  canGoToIdentificationData: boolean;
  canGoToReview: boolean;
  hasAgreed: boolean;
}) => {
  switch (activeStepIndex) {
    case INIT_ONBOARDING_STEP_INDEX:
      return canGoToContactData;
    case INIT_ONBOARDING_STEP_INDEX + 1:
      return canGoToRepresentativeData;
    case INIT_ONBOARDING_STEP_INDEX + 2:
      return canGoToIdentificationData;
    case INIT_ONBOARDING_STEP_INDEX + 3:
      return canGoToReview;
    case INIT_ONBOARDING_STEP_INDEX + 4:
      return hasAgreed;
    default:
      return false;
  }
};

export default function useOnboardingProvider(): OnboardingContextType {
  const [companyType, setCompanyType] = useState(CompanyTypes.StartUp);
  const [activeStepIndex, setActiveStepIndex] = useState(
    INIT_ONBOARDING_STEP_INDEX
  );
  const { onboardingData, onboardingDataSetters } = useOnboardingData();
  const [canGoToContactData, setCanGoToContactData] = useState(false);
  const [canGoToRepresentativeData, setCanGoToRepresentativeData] =
    useState(false);
  const [canGoToIdentificationData, setCanGoToIdentificationData] =
    useState(false);
  const [canGoToReview, setCanGoToReview] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  const stepTitles = useMemo(
    () => userSteps[companyType as keyof typeof userSteps],
    [companyType]
  );

  const canGoNext = useMemo(
    () =>
      getCanGoNext({
        activeStepIndex,
        canGoToContactData,
        canGoToRepresentativeData,
        canGoToIdentificationData,
        canGoToReview,
        hasAgreed,
      }),
    [
      activeStepIndex,
      canGoToContactData,
      canGoToIdentificationData,
      canGoToRepresentativeData,
      canGoToReview,
      hasAgreed,
    ]
  );

  const keyLabels = useMemo(
    () => getOnboardingKeyLabels(companyType),
    [companyType]
  );

  return {
    companyType,
    setCompanyType,

    activeStepIndex,
    setActiveStepIndex,
    stepTitles,

    onboardingData,
    onboardingDataSetters,

    keyLabels,

    canGoNext,
    setCanGoToContactData,
    setCanGoToRepresentativeData,
    setCanGoToIdentificationData,
    setCanGoToReview,

    hasAgreed,
    setHasAgreed,
  };
}
