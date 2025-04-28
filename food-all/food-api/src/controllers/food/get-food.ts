import { category } from "../../models/category-model";
import { foodModel } from "../../models/food-model";

export const getFood = async (req, res) => {
  const { categoryId } = req.query;
  const foods = await foodModel
    .find(categoryId ? { category: categoryId } : {})
    .populate("category");
  return res.status(200).json({ foods });
};
