import { AccountTypes, Providers } from "@/lib/types";

declare module "mongoose" {
  interface AccountDocument extends Document {
    provider: Providers;
    type: AccountTypes;
    providerAccountId: string;
    userId: Schema.ObjectId;

    access_token?: string;
    id_token?: string;
    expires_at?: Number;
    token_type?: string;

    scope: string;
  }
}
