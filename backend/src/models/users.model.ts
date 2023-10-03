import { model, Schema, Model, Types } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    id: {
        type: Number,
        required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true 
    },
    firstname: {
        type: String,
        required: true 
    },
    pseudo: {
        type: String,
        required: true 
    },
    birthday: {
        type: Date,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: true
    },
    verificationToken: {
        type: String,
        required: true
    },
    etoiles: {
        type: Number,
        required: true
    },
    theme: {
        type: Boolean,
        required: true
    },
});

export interface IIUser {
    _id: Types.ObjectId;
    email: String;
    password: Number;
    name: String;
    firstname: String;
    pseudo: String;
    birthday: Date;
    admin: Boolean;
    xp: Number;
    isVerified: Boolean;
    verificationToken: String;
    etoiles: Number;
    theme: Boolean;
}
export interface IUser extends Omit<IIUser, "_id">, Document {}

export const User = model<IUser, Model<IUser>>(
  "User",
  UserSchema,
  "users"
);