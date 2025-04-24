import { category } from "../../models/category-model";

export const getCategory = async (req, res) => {
  const categories = await category.find({});
  return res.status(201).json({ categories });
};
