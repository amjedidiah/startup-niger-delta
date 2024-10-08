import clientPromise from "@/lib/mongo";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";
import { isDev } from "@/lib/constants";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { Providers } from "@/lib/types";
import {
  dbAuthorizeCredentials,
  dbUpdateEmailVerified,
} from "@/lib/actions/db";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: Providers.Credentials,
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const hasInvalidCredentials =
          !credentials?.email || !credentials?.password;

        if (!credentials || hasInvalidCredentials)
          throw new Error("Invalid credentials");

        return dbAuthorizeCredentials(credentials);
      },
    }),
  ],
  events: {
    signIn: async ({ account, user }) => {
      if (account?.provider === Providers.Google)
        await dbUpdateEmailVerified(user.email as string);
    },
  },
  debug: isDev,
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signOut: "/",
    signIn: "/signin",
  },
  cookies: {
    pkceCodeVerifier: {
      name: "next.auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
};

export default authOptions;
