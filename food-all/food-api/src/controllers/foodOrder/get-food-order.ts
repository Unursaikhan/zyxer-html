import { foodOrderModel } from "../../models/foodOrder-model";

export const getFoodOrder = async (req, res) => {
  const orders = await foodOrderModel;
  return res.status(200).json({ orders });
};
