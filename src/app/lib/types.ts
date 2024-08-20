import { Dispatch, SetStateAction } from "react";

export type StartUpOnboardingData = CommonProfileData &
  StartUpSpecificProfileData &
  ContactData &
  StartUpRepresentativeData &
  StartUpIdentificationData & {
    linkedUser: any;
  };

export type OtherOnboardingData = CommonProfileData &
  ContactData &
  OtherRepresentativeData &
  OtherIdentificationData & {
    linkedUser: any;
  };

export type OnboardingData = {
  profileData?: ProfileData;
  contactData?: ContactData;
  representativeData?: RepresentativeData;
  identificationData?: IdentificationData;
};

export type OnboardingDataSetters = {
  setProfileData: Dispatch<SetStateAction<ProfileData | undefined>>;
  setContactData: Dispatch<SetStateAction<ContactData>>;
  setRepresentativeData: Dispatch<SetStateAction<RepresentativeData>>;
  setIdentificationData: Dispatch<
    SetStateAction<IdentificationData | undefined>
  >;
};

export type OnboardingContextType = {
  companyType: CompanyTypes;
  setCompanyType: Dispatch<SetStateAction<CompanyTypes>>;

  activeStepIndex: number;
  setActiveStepIndex: Dispatch<SetStateAction<number>>;
  stepTitles: string[];

  keyLabels: Record<string, string>;

  onboardingData: OnboardingData;
  onboardingDataSetters: OnboardingDataSetters;

  canGoNext: boolean;
  setCanGoToContactData: Dispatch<SetStateAction<boolean>>;
  setCanGoToRepresentativeData: Dispatch<SetStateAction<boolean>>;
  setCanGoToIdentificationData: Dispatch<SetStateAction<boolean>>;
  setCanGoToReview: Dispatch<SetStateAction<boolean>>;

  hasAgreed: boolean;
  setHasAgreed: Dispatch<SetStateAction<boolean>>;
};

export enum CompanyTypes {
  StartUp = "startup",
  AngelInvestor = "angel investor",
  VentureCapitalist = "venture capitalist",
  Others = "accelerators, innovation hubs & incubators",
}

export type SelectData = {
  value: string;
  label: string;
};

type CommonProfileData = {
  name: string;
  description: string; // textArea
  fundingInterests: SelectData[];
};

export type StartUpSpecificProfileData = {
  yearOfInc: string; // date
  rcNumber: string;
  industry: SelectData;
};

export type ProfileData = CommonProfileData &
  (
    | StartUpSpecificProfileData
    | {
        industryInterests: SelectData[];
      }
  );

export type ContactData = {
  email: string; // email
  website: string; // url
  address: string; // address
  phoneNumber: string; // tel
};

type CommonRepresentativeData = {
  representativeName: string;
};

export type StartUpRepresentativeData = CommonRepresentativeData & {
  founderEmail: string; // email
  founderAddress: string; // text
  founderPhoneNumber: string; // tel
  noOfFounders: SelectData; // select
};

export type OtherRepresentativeData = CommonRepresentativeData & {
  investmentExperience: SelectData; // select
  investmentProof: string; // url
  investmentSize: SelectData; // select
};

export type RepresentativeData =
  | StartUpRepresentativeData
  | OtherRepresentativeData;

export type StartUpIdentificationData = {
  cacCertificateUrl: string; // cldUpload
  companyLogoUrl: string; // cldUpload
};

export type OtherIdentificationData = {
  identificationMeans: SelectData; // select
  nationality: SelectData; // select
  identificationMessage: string; // textArea
};

export type IdentificationData =
  | StartUpIdentificationData
  | OtherIdentificationData;

export enum ErrorProcess {
  Cloudinary = "cloudinary",
}

export type AuthFormValues = {
  name?: string;
  email: string;
  password: string;
};

export enum Providers {
  Google = "google",
  Apple = "apple",
  Credentials = "credentials",
}

export enum AccountTypes {
  OAuth = "oauth",
  Credentials = "credentials",
}