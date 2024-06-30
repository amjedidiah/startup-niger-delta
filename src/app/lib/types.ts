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

  canGoNext: boolean;
  setCanGoToCompanyContact: Dispatch<SetStateAction<boolean>>;
  setCanGoToPersonProfile: Dispatch<SetStateAction<boolean>>;
  setCanGoToIdentification: Dispatch<SetStateAction<boolean>>;
  setCanGoToReview: Dispatch<SetStateAction<boolean>>;
};

export enum UserTypes {
  StartUp = "startup",
  AngelInvestor = "angel investor",
  VentureCapitalist = "venture capitalist",
  Others = "accelerators, innovation hubs & incubators",
}

// type StartUpData = {
//   companyName: string;
//   yearsOfInc: string; // date
//   rcNumber: string;
//   industry: string;
//   companyDescription: string; // textArea

//   companyEmail: string; // email
//   companyWebsite: string; // url
//   companyAddress: string; // address
//   companyPhoneNumber: string; // tel

//   founderName: string;
//   founderEmail: string; // email
//   founderAddress: string; // address
//   founderPhoneNumber: string; // tel
//   noOfCoFounders: number; // number

//   cacCertificate: File;
//   companyProfile: File;
// };

// type AngelInvestorData = {
//   companyOrPersonName: string;
//   nationality: string;
//   companyDescription: string; // textArea

//   companyEmail: string;
//   companyWebsite: string; // textArea
//   companyAddress: string; // address
//   companyPhoneNumber: string; // tel

//   angel: string;
//   investmentExperience: string; // select
//   investmentProof: string; // url
//   investmentSize: string; // select

//   meansOfIdentificationType: string; // select
//   meansOfIdentificationFile: File;
//   message: string; // textArea
// };

// type VentureCapitalistData = {
//   companyName: string;
//   nationality: string;
//   rcNumber: string;
//   companyDescription: string; // textArea

//   companyEmail: string;
//   companyWebsite: string; // textArea
//   companyAddress: string; // address
//   companyPhoneNumber: string; // tel

//   generalPartner: string;
//   investmentExperience: string; // select
//   investmentProof: string; // url
//   investmentSize: string; // select

//   meansOfIdentificationType: string; // select
//   meansOfIdentificationFile: File;
//   message: string; // textArea
// };

// type OtherData = {
//   companyName: string;
//   nationality: string;
//   rcNumber: string;
//   companyDescription: string; // textArea

//   companyEmail: string;
//   companyWebsite: string; // url
//   companyAddress: string; // address
//   companyPhoneNumber: string; // tel

//   principalPromoter: string;
//   investmentExperience: string; // select
//   investmentProof: string; // url
//   investmentSize: string; // select

//   meansOfIdentificationType: string; // select
//   meansOfIdentificationFile: File;
//   message: string; // textArea
// };

type CountryData = {
  value: string;
  label: string;
};

export type StartUpProfileData = {
  companyName: string;
  yearsOfInc: string; // date
  rcNumber: string;
  industry: string;
  companyDescription: string; // textArea
};

export type AngelInvestorProfileData = {
  companyOrPersonName: string;
  nationality: CountryData;
  companyDescription: string; // textArea
};

export type ProfileData =
  | StartUpProfileData
  | AngelInvestorProfileData
  | {
      companyName: string;
      nationality: CountryData;
      rcNumber: string;
      companyDescription: string; // textArea
    };

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
  noOfCoFounders: number; // select
};

export type OtherPersonData = {
  personName: string;
  investmentExperience: string; // select
  investmentProof: string; // url
  investmentSize: string; // select
};

export type PersonData = StartUpPersonData | OtherPersonData;

export type CompanyIdentificationData = {
  cacCertificate: File;
  companyProfile: File;
};

export type OtherIdentificationData = {
  meansOfIdentificationType: string; // select
  meansOfIdentificationFile: File;
  message: string; // textArea
};

export type IdentificationData =
  | CompanyIdentificationData
  | OtherIdentificationData;
