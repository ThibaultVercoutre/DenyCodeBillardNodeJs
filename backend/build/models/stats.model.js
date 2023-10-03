import { model, Schema } from "mongoose";
const LanguageVisitSchema = new Schema({
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
export const LanguageVisit = model("LanguageVisit", LanguageVisitSchema, "languages");
