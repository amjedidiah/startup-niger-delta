import { INIT_ONBOARDING_STEP_INDEX, userSteps } from "@/lib/constants";
import { OnboardingContextType, UserTypes } from "@/lib/types";
import { useMemo, useState } from "react";

const getPersonNameLabel = (userType: UserTypes) =>
  ({
    [UserTypes.AngelInvestor]: "Angel",
    [UserTypes.Others]: "Principal Promoter",
    [UserTypes.StartUp]: "Founder's Name",
    [UserTypes.VentureCapitalist]: "General Partner",
  }[userType] || "Full Name");

const getOnboardingKeyLabels = (userType: UserTypes) => ({
  companyName: `Company ${
    userType === UserTypes.AngelInvestor ? "/ Individual" : ""
  } Name`,
  yearsOfInc: "Years of Incorporation",
  rcNumber: "RC Number",
  industry: "Industry",
  companyDescription: `${
    userType === UserTypes.StartUp ? "Startup" : "Business"
  } Description`,
  fundingInterest: "Funding Interest",

  companyEmail: "Company Email",
  companyPhoneNumber: "Company Phone Number",
  companyAddress: "Company Address",
  companyWebsite: "Company Website",

  personName: getPersonNameLabel(userType),
  founderEmail: "Founder's Email",
  founderAddress: "Founder's Address",
  founderPhoneNumber: "Founder's Phone",
  noOfFounders: "No of Founders",
  investmentExperience: "Investment Experience",
  investmentProof: "Investment Proof",
  investmentSize: "Investment Size",

  cacCertificate: "CAC Certificate",
  companyLogo: "Company Logo",
  identificationMeans: "Means of Identification",
  nationality: "Nationality",
  identificationMessage: "Message",
});

const getCanGoNext = ({
  activeStepIndex,
  canGoToCompanyContact,
  canGoToPersonProfile,
  canGoToIdentification,
  canGoToReview,
  hasAgreed,
}: {
  activeStepIndex: number;
  canGoToCompanyContact: boolean;
  canGoToPersonProfile: boolean;
  canGoToIdentification: boolean;
  canGoToReview: boolean;
  hasAgreed: boolean;
}) => {
  switch (activeStepIndex) {
    case INIT_ONBOARDING_STEP_INDEX:
      return canGoToCompanyContact;
    case INIT_ONBOARDING_STEP_INDEX + 1:
      return canGoToPersonProfile;
    case INIT_ONBOARDING_STEP_INDEX + 2:
      return canGoToIdentification;
    case INIT_ONBOARDING_STEP_INDEX + 3:
      return canGoToReview;
    case INIT_ONBOARDING_STEP_INDEX + 4:
      return hasAgreed;
    default:
      return false;
  }
};

export default function useOnboardingProvider(): OnboardingContextType {
  const [userType, setUserType] = useState(UserTypes.StartUp);
  const [activeStepIndex, setActiveStepIndex] = useState(
    INIT_ONBOARDING_STEP_INDEX
  );
  const [profileData, setProfileData] =
    useState<OnboardingContextType["profileData"]>();
  const [contactData, setContactData] =
    useState<OnboardingContextType["contactData"]>();
  const [personData, setPersonData] =
    useState<OnboardingContextType["personData"]>();
  const [identificationData, setIdentificationData] =
    useState<OnboardingContextType["identificationData"]>();
  const [canGoToCompanyContact, setCanGoToCompanyContact] = useState(false);
  const [canGoToPersonProfile, setCanGoToPersonProfile] = useState(false);
  const [canGoToIdentification, setCanGoToIdentification] = useState(false);
  const [canGoToReview, setCanGoToReview] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);

  const stepTitles = useMemo(
    () => userSteps[userType as keyof typeof userSteps],
    [userType]
  );

  const canGoNext = useMemo(
    () =>
      getCanGoNext({
        activeStepIndex,
        canGoToCompanyContact,
        canGoToPersonProfile,
        canGoToIdentification,
        canGoToReview,
        hasAgreed,
      }),
    [
      activeStepIndex,
      canGoToCompanyContact,
      canGoToIdentification,
      canGoToPersonProfile,
      canGoToReview,
      hasAgreed,
    ]
  );

  const keyLabels = useMemo(() => getOnboardingKeyLabels(userType), [userType]);

  return {
    userType,
    setUserType,

    activeStepIndex,
    setActiveStepIndex,
    stepTitles,

    profileData,
    setProfileData,

    contactData,
    setContactData,

    personData,
    setPersonData,

    identificationData,
    setIdentificationData,

    keyLabels,

    canGoNext,
    setCanGoToCompanyContact,
    setCanGoToPersonProfile,
    setCanGoToIdentification,
    setCanGoToReview,

    hasAgreed,
    setHasAgreed,
  };
}
