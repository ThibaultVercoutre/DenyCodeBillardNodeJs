import { model, Schema } from "mongoose";
const UserSchema = new Schema({
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
export const User = model("User", UserSchema, "users");
