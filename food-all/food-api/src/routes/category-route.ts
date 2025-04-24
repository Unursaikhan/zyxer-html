import { Router } from "express";
import { createCategory } from "../controllers/category/create-category";
import { getCategory } from "../controllers/category/get-category";

const categoryRouter = Router();
categoryRouter.get("/", getCategory).post("/", createCategory);
export default categoryRouter;
