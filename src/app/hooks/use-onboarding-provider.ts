import { INIT_ONBOARDING_STEP_INDEX, userSteps } from "@/lib/constants";
import { OnboardingContextType, UserTypes } from "@/lib/types";
import { useMemo, useState } from "react";

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

  const stepTitles = useMemo(
    () => userSteps[userType as keyof typeof userSteps],
    [userType]
  );

  const canGoNext = useMemo(() => {
    switch (activeStepIndex) {
      case INIT_ONBOARDING_STEP_INDEX:
        return canGoToCompanyContact;
      case INIT_ONBOARDING_STEP_INDEX + 1:
        return canGoToPersonProfile;
      case INIT_ONBOARDING_STEP_INDEX + 2:
        return canGoToIdentification;
      case INIT_ONBOARDING_STEP_INDEX + 3:
        return canGoToReview;
      default:
        return false;
    }
  }, [
    activeStepIndex,
    canGoToCompanyContact,
    canGoToIdentification,
    canGoToPersonProfile,
    canGoToReview,
  ]);

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

    canGoNext,
    setCanGoToCompanyContact,
    setCanGoToPersonProfile,
    setCanGoToIdentification,
    setCanGoToReview,
  };
}
