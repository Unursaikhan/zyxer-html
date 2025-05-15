import { RequestHandler } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../../models/user-model";
export const postAuthSignup: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 2);
    await userModel.create({
      ...req.body,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(200).json({
      message: "User neegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
