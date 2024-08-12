declare module "mongoose" {
  interface UserDocument extends Document {
    email: string;
    password?: string;

    name: string;
    image?: string;
    emailVerified: Boolean | null;
    isOnboarded: Boolean;

    emailVerificationToken?: string;
    emailVerificationExpires?: number;
    generateEmailVerification(): string; // Declare the custom method

    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    generatePasswordReset(): string; // Declare the custom method
    comparePassword(password: string): Promise<boolean>;
  }
}
