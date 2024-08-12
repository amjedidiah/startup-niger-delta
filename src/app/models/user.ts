import { model, models, Schema, UserDocument, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { mailEmailConfirmationToken } from "@/lib/actions/mail";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, select: false },

    name: {
      type: String,
      required: true,
    },
    image: String,

    emailVerified: { type: Boolean, default: false },
    isOnboarded: { type: Boolean, default: false },

    emailVerificationToken: String,
    emailVerificationExpires: Number,

    resetPasswordToken: String,
    resetPasswordExpires: Number,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  if (
    this.isModified("emailVerificationToken") &&
    this.emailVerificationToken
  ) {
    await mailEmailConfirmationToken(this.email, this.emailVerificationToken);
  }

  next();
});

// Compare password with hashed version
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  const user = this; // Access the current user document
  const populatedUser = await User.findById(user._id).select("password"); // Explicitly select password
  return await bcrypt.compare(candidatePassword, populatedUser?.password || "");
};

// Generate email verification token
UserSchema.methods.generateEmailVerification = function () {
  this.emailVerificationToken = crypto.randomBytes(32).toString("hex");
  this.emailVerificationExpires = Date.now() + 3600000; // 1 hour
  return this.emailVerificationToken;
};

// Generate password reset token
UserSchema.methods.generatePasswordReset = function () {
  this.resetPasswordToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  return this.resetPasswordToken;
};

const User: Model<
  UserDocument,
  {},
  {},
  {},
  Document<unknown, {}, UserDocument> &
    UserDocument &
    Required<{
      _id: unknown;
    }>,
  any
> = models.users || model<UserDocument>("users", UserSchema);

export default User;
