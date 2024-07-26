import { Dispatch, SetStateAction } from "react";

export type OnboardingContextType = {
  userType: UserTypes;
  setUserType: Dispatch<SetStateAction<UserTypes>>;

  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
  stepTitles: string[];

  profileData?: ProfileData;
  setProfileData: Dispatch<SetStateAction<ProfileData | undefined>>;

  contactData?: ContactData;
  setContactData: Dispatch<SetStateAction<ContactData | undefined>>;

  personData?: PersonData;
  setPersonData: Dispatch<SetStateAction<PersonData | undefined>>;

  identificationData?: IdentificationData;
  setIdentificationData: Dispatch<
    SetStateAction<IdentificationData | undefined>
  >;

  keyLabels: Record<string, string>;

  canGoNext: boolean;
  setCanGoToCompanyContact: Dispatch<SetStateAction<boolean>>;
  setCanGoToPersonProfile: Dispatch<SetStateAction<boolean>>;
  setCanGoToIdentification: Dispatch<SetStateAction<boolean>>;
  setCanGoToReview: Dispatch<SetStateAction<boolean>>;

  hasAgreed: boolean;
  setHasAgreed: Dispatch<SetStateAction<boolean>>;
};

export enum UserTypes {
  StartUp = "startup",
  AngelInvestor = "angel investor",
  VentureCapitalist = "venture capitalist",
  Others = "accelerators, innovation hubs & incubators",
}

type CountryData = {
  value: string;
  label: string;
};

type CommonProfileData = {
  companyDescription: string; // textArea
  industry: string;
  fundingInterest: string;
};

export type StartUpProfileData = {
  companyName: string;
  yearsOfInc: string; // date
  rcNumber: string;
};

export type ProfileData = CommonProfileData &
  (
    | StartUpProfileData
    | {
        companyName: string;
      }
  );

export type ContactData = {
  companyEmail: string; // email
  companyWebsite: string; // url
  companyAddress: string; // address
  companyPhoneNumber: string; // tel
};

export type StartUpPersonData = {
  personName: string;
  founderEmail: string; // email
  founderAddress: string; // text
  founderPhoneNumber: string; // tel
  noOfFounders: number; // select
};

export type OtherPersonData = {
  personName: string;
  investmentExperience: string; // select
  investmentProof: string; // url
  investmentSize: string; // select
};

export type PersonData = StartUpPersonData | OtherPersonData;

export type CompanyIdentificationData = {
  cacCertificate: string; // cldupload
  companyLogo: string; // cldupload
};

export type OtherIdentificationData = {
  identificationMeans: string; // select
  nationality: CountryData;
  identificationMessage: string; // textArea
};

export type IdentificationData =
  | CompanyIdentificationData
  | OtherIdentificationData;

export enum ErrorProcess {
  Cloudinary = "cloudinary",
}