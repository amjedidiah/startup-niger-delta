import {
  FacilitatorDocument,
  Document,
  Model,
  model,
  models,
  Schema,
} from "mongoose";

const FacilitatorSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    industryInterests: {
      type: String,
      required: true,
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
    investmentExperience: {
      type: String,
      required: true,
    },
    investmentProof: {
      type: String,
      required: true,
    },
    investmentSize: {
      type: String,
      required: true,
    },

    identificationMeans: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    identificationMessage: {
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

const Facilitator: Model<
  FacilitatorDocument,
  {},
  {},
  {},
  Document<unknown, {}, FacilitatorDocument> &
    FacilitatorDocument &
    Required<{
      _id: unknown;
    }>,
  any
> =
  models.facilitators ||
  model<FacilitatorDocument>("facilitators", FacilitatorSchema);

export default Facilitator;
