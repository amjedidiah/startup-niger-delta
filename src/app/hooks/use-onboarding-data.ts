import {
  ContactData,
  IdentificationData,
  ProfileData,
  RepresentativeData,
} from "@/lib/types";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useMemo, useState } from "react";

export default function useOnboardingData() {
  const { data: session } = useSession();
  const { email, name: representativeName } = (session as Session).user;
  const [profileData, setProfileData] = useState<ProfileData>();
  const [contactData, setContactData] = useState<ContactData>({
    email,
  } as ContactData);
  const [representativeData, setRepresentativeData] =
    useState<RepresentativeData>({
      representativeName,
    } as RepresentativeData);
  const [identificationData, setIdentificationData] =
    useState<IdentificationData>();

  const onboardingData = useMemo(
    () => ({
      profileData,
      contactData,
      representativeData,
      identificationData,
    }),
    [contactData, identificationData, profileData, representativeData]
  );

  const onboardingDataSetters = useMemo(
    () => ({
      setProfileData,
      setContactData,
      setRepresentativeData,
      setIdentificationData,
    }),
    []
  );

  return {
    onboardingData,
    onboardingDataSetters,
  };
}
