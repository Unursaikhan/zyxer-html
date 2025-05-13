import { userModel } from "../../models/user-model";

export const createdUser = async (req, res) => {
  const {
    email,
    password,
    phoneNumber,
    address,
    role,
    orderedFoods,
    isVerified,
  } = req.body;
  await userModel.create({
    email,
    password,
    phoneNumber,
    address,
    role,
    orderedFoods,
    isVerified,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.status(201).json({
    massage: "Success",
  });
};
