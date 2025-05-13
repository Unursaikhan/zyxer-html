import { userModel } from "../../models/user-model";

export const getUsers = async (req, res) => {
  const users = await userModel;
  return res.status(200).json({ users });
};
