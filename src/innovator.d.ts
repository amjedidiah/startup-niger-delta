declare module "mongoose" {
  interface InnovatorDocument extends Document {
    description: string; // textArea
    industry: string;
    fundingInterest: string;
    name: string;

    yearOfInc: number; // date
    rcNumber: string;

    email: string; // email
    website: string; // url
    address: string; // address
    phoneNumber: string; // tel

    representativeName: string;
    founderEmail: string; // email
    founderAddress: string; // text
    founderPhoneNumber: string; // tel
    noOfFounders: number; // select

    cacCertificateUrl: string; // cldUpload
    companyLogoUrl: string; // cldUpload

    linkedUser: Schema.ObjectId;
  }
}
