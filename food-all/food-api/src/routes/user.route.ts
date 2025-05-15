import { Router } from "express";
import { getUsers } from "../controllers/users/get-users";
import { createdUser } from "../controllers/users/create-user";

const userRouter = Router();
userRouter.get(`/`, getUsers);
export default userRouter;
