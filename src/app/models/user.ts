import { model, models, Schema, UserDocument, Document, Model } from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, index: true },

    password: { type: String, select: false },
    image: String,

    emailVerified: { type: Boolean, default: false },
    isOnboarded: { type: Boolean, default: false },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

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
