import { model, Schema } from "mongoose";

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});
export const category = model("category", categorySchema);
