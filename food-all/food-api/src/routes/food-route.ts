import { Router } from "express";
import { getFood } from "../controllers/food/get-food";
import { createdFood } from "../controllers/food/create-food";

const foodRouter = Router();
foodRouter.get(`/`, getFood).post(`/`, createdFood);
export default foodRouter;
