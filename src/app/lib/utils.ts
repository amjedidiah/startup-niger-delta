import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import truncateHtml from "truncate-html";
import { DEFAULT_ERROR_STATUS_CODE } from "@/lib/constants";
import { CompanyTypes } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateText = (text: string, wordCount = 22) =>
  truncateHtml(text, wordCount, {
    byWords: true,
  });

export class HttpError {
  name = "HttpError";

  process: string;
  message: string;
  status: number;
  data: any;

  constructor(process: string, message: string, status?: number, data?: any) {
    this.process = process;
    this.message = message;
    this.status = status || DEFAULT_ERROR_STATUS_CODE;
    this.data = data || null;
  }
}

export const handleResponseError = (error: any) => {
  const status =
    error instanceof HttpError ? error.status : DEFAULT_ERROR_STATUS_CODE;

  console.error(error);
  return Response.json(
    error instanceof HttpError
      ? error
      : { data: null, message: (error as Error).message },
    {
      status,
    }
  );
};
const getRepresentativeNameLabel = (userType: CompanyTypes) =>
  ({
    [CompanyTypes.AngelInvestor]: "Angel Name",
    [CompanyTypes.Others]: "Principal Promoter",
    [CompanyTypes.StartUp]: "Founder's Name",
    [CompanyTypes.VentureCapitalist]: "General Partner",
  }[userType] || "Full Name");

export const getOnboardingKeyLabels = (userType: CompanyTypes) => ({
  name: `Company ${
    userType === CompanyTypes.AngelInvestor ? "/ Individual" : ""
  } Name`,
  yearOfInc: "Year of Incorporation",
  rcNumber: "RC Number",
  industry: "Industry",
  industryInterests: "Industry Interests",
  description: `${
    userType === CompanyTypes.StartUp ? "Startup" : "Business"
  } Description`,
  fundingInterests: "Funding Interests",

  email: "Company Email",
  phoneNumber: "Company Phone Number",
  address: "Company Address",
  website: "Company Website",

  representativeName: getRepresentativeNameLabel(userType),
  founderEmail: "Founder's Email",
  founderAddress: "Founder's Address",
  founderPhoneNumber: "Founder's Phone",
  noOfFounders: "No of Founders",
  investmentExperience: "Investment Experience",
  investmentProof: "Investment Proof",
  investmentSize: "Investment Size",

  cacCertificateUrl: "CAC Certificate",
  companyLogoUrl: "Company Logo",
  identificationMeans: "Means of Identification",
  nationality: "Nationality",
  identificationMessage: "Message",
});