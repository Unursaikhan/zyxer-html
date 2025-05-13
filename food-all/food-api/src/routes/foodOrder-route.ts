import { Router } from "express";
import { getFoodOrder } from "../controllers/foodOrder/get-food-order";
import { createFoodOrder } from "../controllers/foodOrder/create-foodOrders";

const foodOrderRouter = Router();
foodOrderRouter.get(`/`, getFoodOrder).post(`/`, createFoodOrder);
// .put(`/`, editFood);
export default foodOrderRouter;
