"use client";
import { INIT_ONBOARDING_STEP_INDEX } from "@/lib/constants";
import {
  OnboardingContextType,
  CompanyTypes,
  OnboardingData,
  OnboardingDataSetters,
} from "@/lib/types";
import { createContext } from "react";

export default createContext({
  companyType: CompanyTypes.StartUp,
  setCompanyType: () => {},

  activeStepIndex: INIT_ONBOARDING_STEP_INDEX,
  setActiveStepIndex: () => {},
  stepTitles: [],

  onboardingData: {} as OnboardingData,
  onboardingDataSetters: {} as OnboardingDataSetters,

  keyLabels: {},

  canGoNext: false,
  setCanGoToContactData: () => {},
  setCanGoToRepresentativeData: () => {},
  setCanGoToIdentificationData: () => {},
  setCanGoToReview: () => {},

  hasAgreed: false,
  setHasAgreed: () => {},
} as OnboardingContextType);