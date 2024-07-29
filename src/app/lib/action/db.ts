"use server";

import dbConnect from "@/lib/mongoose";
import User from "@/models/user";
import { getServerSession } from "next-auth";
import { cache } from "react";
import { AuthFormValues, Providers } from "@/lib/types";
import Account from "@/models/account";
import { UserDocument } from "mongoose";

const dbGetUser = cache(async (email?: string | null) => {
  if (!email) {
    const session = await getServerSession();
    email = session?.user?.email;
  }
  await dbConnect();

  return User.findOne({ email });
});

export const dbGetIsOnboarded = async () => {
  try {
    const user = await dbGetUser();
    return !!user?.isOnboarded;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const dbGetEmailVerified = async () => {
  try {
    const user = await dbGetUser();
    return !!user?.emailVerified;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const dbGetUserExists = async (email: string) => {
  try {
    const user = await dbGetUser(email);
    return !!user;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const dbCreateNewUser = async (values: AuthFormValues) => {
  // Create user
  const user = await User.create(values);
  const id = (user._id as any).toString();

  // Create account
  await Account.create({
    provider: Providers.Credentials,
    type: Providers.Credentials,
    providerAccountId: id,
    userId: user._id,
  });

  return user;
};

const dbFormatUser = ({
  _id,
  name,
  email,
  image,
  emailVerified,
}: UserDocument) => ({
  id: (_id as any).toString(),
  name,
  email,
  image,
  emailVerified,
});

export const dbAuthorizeCredentials = async (values: AuthFormValues) => {
  try {
    let user = await dbGetUser(values.email);
    if (!user) {
      if (!("name" in values)) throw new Error("Invalid credentials");

      // Create user
      user = await dbCreateNewUser(values);
    }

    const isPasswordCorrect = await user.comparePassword(values.password);
    if (!isPasswordCorrect) throw new Error("Invalid user credentials");

    return dbFormatUser(user);
  } catch (error) {
    console.error(error);
    throw new Error((error as any).message);
  }
};

export const dbUpdateEmailVerified = async (email: string) => {
  const user = await dbGetUser(email);
  if (user?.emailVerified) return;

  await User.findOneAndUpdate({ email }, { emailVerified: true });
};
