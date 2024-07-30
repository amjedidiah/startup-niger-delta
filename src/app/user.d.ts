import { Document } from "mongoose";

declare module "mongoose" {
  interface UserDocument extends Document {
    name: string;
    email: string;

    password?: string;
    image?: string;

    emailVerified: Boolean | null;
    isOnboarded: Boolean;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
    generatePasswordReset(): string; // Declare the custom method
    comparePassword(password: string): Promise<boolean>;
  }
}
