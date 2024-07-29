import { Providers } from "@/lib/types";
import {
  Schema,
  models,
  model,
  AccountDocument,
  Document,
  Model,
} from "mongoose";

const AccountSchema = new Schema({
  provider: { type: String, required: true, enum: Object.values(Providers) },
  type: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  userId: { type: Schema.ObjectId, ref: "User", required: true },

  access_token: String,
  id_token: String,
  expires_at: Number,
  token_type: String,

  scope: { type: String, default: "all" },
});

const Account: Model<
  AccountDocument,
  {},
  {},
  {},
  Document<unknown, {}, AccountDocument> &
    AccountDocument &
    Required<{
      _id: unknown;
    }>,
  any
> = models.accounts || model("accounts", AccountSchema);

export default Account;
