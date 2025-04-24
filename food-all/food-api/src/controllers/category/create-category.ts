import { category } from "../../models/category-model";

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  await category.create({
    categoryName,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(201).json({
    massage: "Success",
  });
};
