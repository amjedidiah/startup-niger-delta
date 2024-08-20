import {
  InnovatorDocument,
  Document,
  Model,
  model,
  models,
  Schema,
} from "mongoose";

const InnovatorSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
      index: true,
    },
    fundingInterests: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    yearOfInc: {
      type: Number,
      required: true,
    },
    rcNumber: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    website: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    representativeName: {
      type: String,
      required: true,
    },
    founderEmail: {
      type: String,
      required: true,
    },
    founderAddress: {
      type: String,
      required: true,
    },
    founderPhoneNumber: {
      type: String,
      required: true,
    },
    noOfFounders: {
      type: Number,
      required: true,
    },
    cacCertificateUrl: {
      type: String,
      required: true,
    },
    companyLogoUrl: {
      type: String,
      required: true,
    },

    linkedUser: {
      type: Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Innovator: Model<
  InnovatorDocument,
  {},
  {},
  {},
  Document<unknown, {}, InnovatorDocument> &
    InnovatorDocument &
    Required<{
      _id: unknown;
    }>,
  any
> =
  models.innovators || model<InnovatorDocument>("innovators", InnovatorSchema);

export default Innovator;
