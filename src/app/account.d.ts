import { Document, Schema } from "mongoose";

declare module "mongoose" {
  interface AccountDocument extends Document {
    provider: string;
    type: string;
    providerAccountId: string;
    userId: Schema.ObjectId;

    access_token?: string;
    id_token?: string;
    expires_at?: Number;
    token_type?: string;

    scope: string;
  }
}
