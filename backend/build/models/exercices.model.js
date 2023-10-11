import { model, Schema } from "mongoose";
const ExerciceSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    notion: {
        type: String,
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
export const Exercice = model("Exercice", ExerciceSchema, "exercices");
