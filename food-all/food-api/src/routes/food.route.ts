import { Router } from "express";
import { getFood } from "../controllers/food/get-food";
import { createdFood } from "../controllers/food/create-food";
import { editFood } from "../controllers/food/edit-food";

const foodRouter = Router();
foodRouter.get(`/`, getFood).post(`/`, createdFood).put(`/`, editFood);
export default foodRouter;
