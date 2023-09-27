import { model, Schema } from "mongoose";
const LanguageSchema = new Schema({
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
export const Language = model("Language", LanguageSchema, "languages");
