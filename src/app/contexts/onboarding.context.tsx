"use client";
import { INIT_ONBOARDING_STEP_INDEX, userSteps } from "@/lib/constants";
import { ProfileData, UserTypes } from "@/lib/types";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type OnboardingContextType = {
  userType: UserTypes;
  setUserType: Dispatch<SetStateAction<UserTypes>>;

  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
  stepTitles: string[];

  profileData?: ProfileData;
  setProfileData: Dispatch<SetStateAction<ProfileData | undefined>>;

  canGoNext: boolean;
  setCanGoToContactInfo: Dispatch<SetStateAction<boolean>>;
};

const OnboardingContext = createContext({
  userType: UserTypes.StartUp,
  setUserType: () => {},

  activeStepIndex: INIT_ONBOARDING_STEP_INDEX,
  setActiveStepIndex: () => {},
  stepTitles: [],

  setProfileData: () => {},

  canGoNext: false,
  setCanGoToContactInfo: () => {},
} as OnboardingContextType);

export function OnboardingContextProvider({ children }: PropsWithChildren) {
  const [userType, setUserType] = useState(UserTypes.AngelInvestor);
  const [activeStepIndex, setActiveStepIndex] = useState(
    INIT_ONBOARDING_STEP_INDEX
  );
  const [profileData, setProfileData] =
    useState<OnboardingContextType["profileData"]>();
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

  return (
    <OnboardingContext.Provider
      value={{
        userType,
        setUserType,

        activeStepIndex,
        setActiveStepIndex,
        stepTitles,

        profileData,
        setProfileData,

        canGoNext,
        setCanGoToContactInfo,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboardingContext() {
  const contextValue = useContext(OnboardingContext);

  return contextValue;
}
