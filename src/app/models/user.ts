import mongoose, { Model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface User extends mongoose.Document {
  email: string;
  password: string;
  name: string;
}

interface UserMethods {
  matchPassword(password: string): Promise<boolean>;
}

type UserModel = Model<User, {}, UserMethods>;

const userSchema = new mongoose.Schema<User, UserModel, UserMethods>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (password: string): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

const UserModel = mongoose.models.User ?? mongoose.model<User, UserModel>('User', userSchema);

export default UserModel;
