"use client";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import { OnboardingContextType, UserTypes } from "@/lib/types";
import { createContext } from "react";

export default createContext({
  userType: UserTypes.StartUp,
  setUserType: () => {},

  activeStepIndex: INIT_ONBOARDING_STEP_INDEX,
  setActiveStepIndex: () => {},
  stepTitles: [],

  setProfileData: () => {},
  setContactData: () => {},
  setPersonData: () => {},
  setIdentificationData: () => {},

  canGoNext: false,
  setCanGoToCompanyContact: () => {},
  setCanGoToPersonProfile: () => {},
  setCanGoToIdentification: () => {},
  setCanGoToReview: () => {},
} as OnboardingContextType);