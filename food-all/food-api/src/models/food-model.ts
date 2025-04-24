import { Schema, model } from "mongoose";
import { category } from "./category-model";
const foodSchema = new Schema({
  foodname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: category,
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
export const foodModel = model("food", foodSchema);
