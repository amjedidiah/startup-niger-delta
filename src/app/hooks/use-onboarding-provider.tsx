import { INIT_ONBOARDING_STEP_INDEX, userSteps } from "@/lib/constants";
import { OnboardingContextType, UserTypes } from "@/lib/types";
import { useMemo, useState } from "react";

export default function useOnboardingProvider() {
  const [userType, setUserType] = useState(UserTypes.StartUp);
  const [activeStepIndex, setActiveStepIndex] = useState(
    INIT_ONBOARDING_STEP_INDEX
  );
  const [profileData, setProfileData] =
    useState<OnboardingContextType["profileData"]>();
  const [contactData, setContactData] =
    useState<OnboardingContextType["contactData"]>();
  const [canGoToContactInfo, setCanGoToContactInfo] = useState(false);

  const steps = useMemo(
    () => userSteps[userType as keyof typeof userSteps],
    [userType]
  );
  const stepTitles = useMemo(() => steps.map((item) => item.title), [steps]);

  const canGoNext = useMemo(() => {
    switch (activeStepIndex) {
      case INIT_ONBOARDING_STEP_INDEX:
        return canGoToContactInfo;
      default:
        return false;
    }
  }, [canGoToContactInfo, activeStepIndex]);

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

    canGoNext,
    setCanGoToContactInfo,
  };
}
