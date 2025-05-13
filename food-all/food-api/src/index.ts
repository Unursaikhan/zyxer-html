import express from "express";
import foodRouter from "./routes/food-route";
import categoryRouter from "./routes/category-route";
import { connectToDatabase } from "./database/connect-to-db";
import cors from "cors";
import userRouter from "./routes/user-route";
import foodOrderRouter from "./routes/foodOrder-route";
connectToDatabase();
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());
app
  .use("/food", foodRouter)
  .use("/category", categoryRouter)
  .use("/user", userRouter)
  .use("/foodOrder", foodOrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
