"use server";

import dbConnect from "@/lib/mongoose";
import User from "@/models/user";
import { getServerSession, Session } from "next-auth";
import { cache } from "react";
import {
  AuthFormValues,
  OnboardingData,
  Providers,
  SelectData,
} from "@/lib/types";
import Account from "@/models/account";
import { UserDocument } from "mongoose";
import { mailEmailConfirmationToken } from "@/lib/actions/mail";
import Innovator from "@/models/innovator";
import Facilitator from "@/models/facilitator";

const dbGetUser = cache(async (email?: string | null) => {
  try {
    if (!email) {
      const session = await getServerSession();
      email = (session as Session).user.email;
    }
    await dbConnect();

    return User.findOne({ email });
  } catch (error) {
    console.error(error);
  }
});

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

export const dbGetIsOnboarded = async () => {
  const user = await dbGetUser();
  return !!user?.isOnboarded;
};

export const dbGetUserExists = async (email: string) => {
  const user = await dbGetUser(email);
  return !!user;
};

export const dbAuthorizeCredentials = async (values: AuthFormValues) => {
  try {
    let user = await dbGetUser(values.email);
    if (!user) {
      if (!("name" in values)) throw new Error("Invalid credentials");

      // Create user
      user = await dbCreateNewUser(values);

      // Generate email verification token
      await user.generateEmailVerification();
      await user.save();
    }

    const isPasswordCorrect = await user.comparePassword(values.password);
    if (!isPasswordCorrect) throw new Error("Invalid user credentials");

    return dbFormatUser(user);
  } catch (error) {
    console.error(error);
    throw new Error((error as any).message);
  }
};

export const dbHandleEmailVerification = async (token?: string) => {
  try {
    const user = (await dbGetUser()) as UserDocument;
    if (!user) return false;

    const invalidDBToken =
      !user.emailVerificationToken ||
      Date.now() > (user.emailVerificationExpires || 0);
    if (!token || invalidDBToken) return !!user.emailVerified;

    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    user.emailVerified = true;
    const newUser = await user.save();

    console.info("Verified user email");
    return newUser.emailVerified;
  } catch (error) {
    console.error(error);
  }
};

export const dbUpdateEmailVerified = async (email: string) => {
  try {
    const user = await dbGetUser(email);
    if (user?.emailVerified) return;

    await User.findOneAndUpdate({ email }, { emailVerified: true });
  } catch (error) {
    console.error(error);
    throw new Error((error as any).message);
  }
};

export const dbResendVerificationEmail = async (email: string) => {
  try {
    const user = await dbGetUser(email);
    if (!user) throw new Error(`Error fetching user with email: ${email}`);

    const shouldGenerateNewToken =
      Date.now() > (user.emailVerificationExpires || 0);

    if (!shouldGenerateNewToken) {
      await mailEmailConfirmationToken(
        email,
        user.emailVerificationToken as string
      );
      return "ok";
    }

    await user.generateEmailVerification();
    await user.save();

    return "ok";
  } catch (error) {
    console.error(error);
    throw new Error((error as any).message);
  }
};

export const handleOnboardingData = async (
  data: OnboardingData,
  isStartUp: boolean
) => {
  try {
    const session = await getServerSession();
    const email = (session as Session).user.email;

    const user = await dbGetUser(email);
    const processedData = Object.values(data).reduce(
      (acc, b) => ({
        ...acc,
        ...b,
      }),
      {
        linkedUser: user?._id,
      }
    ) as any;

    // Create company in DB with link to user model
    isStartUp
      ? await Innovator.findOneAndUpdate(
          { email },
          {
            ...processedData,
            yearOfInc: new Date(processedData["yearOfInc"]).getTime(),
            industry: processedData["industry"].value,
            noOfFounders: processedData["noOfFounders"].value,
            fundingInterests: processedData["fundingInterests"]
              .map((item: SelectData) => item.value)
              .join(", "),
          },
          {
            upsert: true,
          }
        )
      : await Facilitator.findOneAndUpdate(
          { email },
          {
            ...processedData,
            industryInterests: processedData["industryInterests"]
              .map((item: SelectData) => item.value)
              .join(", "),
            fundingInterests: processedData["fundingInterests"]
              .map((item: SelectData) => item.value)
              .join(", "),
            identificationMeans: processedData["identificationMeans"].value,
            nationality: processedData["nationality"].value,
            investmentExperience: processedData["investmentExperience"].value,
            investmentSize: processedData["investmentSize"].value,
          },
          {
            upsert: true,
          }
        );

    // Set onboarding to true
    await User.findByIdAndUpdate(user?._id, { isOnboarded: true });
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    console.error(error);
  }
};