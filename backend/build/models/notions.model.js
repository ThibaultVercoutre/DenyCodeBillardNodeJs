import { model, Schema } from "mongoose";
const NotionSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});
export const Notion = model("Notion", NotionSchema, "notions");
