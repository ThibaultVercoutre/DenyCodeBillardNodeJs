import { model, Schema, Model, Types } from "mongoose";

const NotionSchema: Schema = new Schema(
  {
    id: {
        type: Number,
        required: true,
    },
    name: {
      type: String,
      required: true,
    }
});

export interface IINotion {
  _id: Types.ObjectId;
  name: String;
}
export interface INotion extends Omit<IINotion, "_id">, Document {}

export const Notion = model<INotion, Model<INotion>>(
  "Notion",
  NotionSchema,
  "notions"
);