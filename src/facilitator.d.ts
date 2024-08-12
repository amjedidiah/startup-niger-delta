declare module "mongoose" {
  interface FacilitatorDocument extends Document {
    description: string; // textArea
    industry: string;
    fundingInterest: string;
    name: string;

    email: string; // email
    website: string; // url
    address: string; // address
    phoneNumber: string; // tel

    representativeName: string;
    investmentExperience: string; // select
    investmentProof: string; // url
    investmentSize: string; // select

    identificationMeans: string; // select
    nationality: string;
    identificationMessage: string; // textArea

    linkedUser: Schema.ObjectId;
  }
}
