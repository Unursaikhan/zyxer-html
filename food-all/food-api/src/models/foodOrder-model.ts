import { Schema, model } from "mongoose";
import { userModel } from "./user-model";
const foodOrderschema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: {
    type: [],
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "canceled", "delivered"],
    default: "peding",
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
export const foodOrderModel = model("foodOrder", foodOrderschema);
