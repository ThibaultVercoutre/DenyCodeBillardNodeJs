import { model, Schema, Model, Types } from "mongoose";

const ExerciceSchema: Schema = new Schema(
  {
    id: {
        type: Number,
        required: true,
    },
    language: {
      type: Number,
      required: true,
    },
    notion: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true 
    },
    nb_visit: {
        type: Number,
        required: true 
    },
    nb_visit_month: {
        type: Number,
        required: true 
    },
    nb_xp: {
        type: Number,
        required: true
    },
    enonce: {
        type: String,
        required: true
    },
});

export interface IIExercice {
    _id: Types.ObjectId;
    id: number;
    language: number;
    notion: number;
    name: string;
    nb_visit: number;
    nb_visit_month: number;
    nb_xp: number;
    enonce: string;
}
export interface IExercice extends Omit<IIExercice, "_id">, Document {}

export const Exercice = model<IExercice, Model<IExercice>>(
  "Exercice",
  ExerciceSchema,
  "exercices"
);