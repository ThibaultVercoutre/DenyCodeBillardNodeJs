import { model, Schema, Model, Types } from "mongoose";

const LanguageSchema: Schema = new Schema(
  {
    id: {
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    }
});

export interface IILanguage {
  _id: Types.ObjectId;
  name: String;
  level: Number;
}
export interface ILanguage extends Omit<IILanguage, "_id">, Document {}

export const Language = model<ILanguage, Model<ILanguage>>(
  "Language",
  LanguageSchema,
  "languages"
);