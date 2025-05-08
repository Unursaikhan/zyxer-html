import { foodModel } from "../../models/food-model";

export const editFood = async (req, res) => {
  const { foodname, price, image, ingredients, category, foodId } = req.body;
  await foodModel.findByIdAndUpdate(foodId, {
    foodname,
    price,
    image,
    ingredients,
    category,
    updatedAt: new Date(),
  });
  res.status(201).json({
    massage: "Success",
  });
};
