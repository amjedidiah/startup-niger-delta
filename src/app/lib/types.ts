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

  canGoNext: boolean;
  setCanGoToContactInfo: Dispatch<SetStateAction<boolean>>;
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
//   companyOrIndividualName: string;
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

export type CompanyProfileData = {
  companyName: string;
  yearsOfInc: string; // date
  rcNumber: string;
  industry: string;
  companyDescription: string; // textArea
};

export type AngelInvestorProfileData = {
  companyOrIndividualName: string;
  nationality: CountryData;
  companyDescription: string; // textArea
};

export type ProfileData =
  | CompanyProfileData
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
