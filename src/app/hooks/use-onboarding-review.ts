import useOnboardingContext from "@/hooks/use-onboarding-context";

export default function useOnboardingReview() {
  const {
    profileData,
    contactData,
    personData,
    identificationData,
    stepTitles,
    keyLabels,
  } = useOnboardingContext();
  const contentArray = [
    profileData,
    contactData,
    personData,
    identificationData,
  ];

  const onboardingData = stepTitles.slice(0, -1).map((item, i) => ({
    title: item,
    content: contentArray[i],
  }));

  return { onboardingData, keyLabels };
}
