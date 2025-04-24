import { foodModel } from "../../models/food-model";

export const createdFood = async (req, res) => {
  const { foodname, price, image, ingredients, category } = req.body;
  await foodModel.create({
    foodname,
    price,
    image,
    ingredients,
    category,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(201).json({
    massage: "Success",
  });
};
