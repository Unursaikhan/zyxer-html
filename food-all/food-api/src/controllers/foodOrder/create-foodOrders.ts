import { foodOrderModel } from "../../models/foodOrder-model";
import { userModel } from "../../models/user-model";

export const createFoodOrder = async (req, res) => {
  const { user, totalPrice, foodOrderItems, status } = req.body;
  await foodOrderModel.create({
    user,
    totalPrice,
    foodOrderItems,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(201).json({
    massage: "Success",
  });
};
