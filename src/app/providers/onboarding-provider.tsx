"use client";
import OnboardingContext from "@/contexts/onboarding.context";
import useOnboardingProvider from "@/hooks/use-onboarding-provider";
import { PropsWithChildren } from "react";

export default function OnboardingProvider({ children }: PropsWithChildren) {
  const value = useOnboardingProvider();

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
}
