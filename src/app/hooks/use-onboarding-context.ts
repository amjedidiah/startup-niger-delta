import OnboardingContext from "@/contexts/onboarding.context";
import { useContext } from "react";

export default function useOnboardingContext() {
  const contextValue = useContext(OnboardingContext);

  return contextValue;
}
