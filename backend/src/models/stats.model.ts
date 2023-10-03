import { model, Schema, Model, Types } from "mongoose";

const LanguageVisitSchema: Schema = new Schema(
  {
    id: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    nb_visit_total: {
      type: Number,
      required: true,
    },
    nb_visit_mounth_total: {
      type: Number,
      required: true,
    }
});

export interface IILanguageVisit {
  _id: Types.ObjectId;
  language: String;
  nb_visit_total: Number;
  nb_visit_mounth_total: Number;
}
export interface ILanguageVisit extends Omit<IILanguageVisit, "_id">, Document {}

export const LanguageVisit = model<ILanguageVisit, Model<ILanguageVisit>>(
  "LanguageVisit",
  LanguageVisitSchema,
  "languages"
);