import express from "express";

import cors from "cors";
import { config } from "dotenv";
import { connectToDatabase } from "../src/database/connect-to-db";
import foodRouter from "../src/routes/food.route";
import categoryRouter from "../src/routes/category.route";
import userRouter from "../src/routes/user.route";
import foodOrderRouter from "../src/routes/foodOrder.route";
import authRouter from "../src/routes/auth.route";
connectToDatabase();
const app = express();
const port = 3001;
config();
app.use(express.json());
app.use(cors());
app
  .use("/food", foodRouter)
  .use("/category", categoryRouter)
  .use("/user", userRouter)
  .use("/foodOrder", foodOrderRouter)
  .use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
