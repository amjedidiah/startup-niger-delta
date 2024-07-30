import { Session as AuthSession } from "next-auth";

declare module "next-auth" {
  interface Session extends AuthSession {
    user: {
      name: string;
      email: string;
      image?: string;
    };
  }
}
