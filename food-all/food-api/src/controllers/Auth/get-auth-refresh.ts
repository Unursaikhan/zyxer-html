import { RequestHandler } from "express";
import { userModel } from "../../models/user-model";

export const getAuthRefresh: RequestHandler = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      res.status(404).json({ message: " User not found" });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Gett me ", error });
  }
};
