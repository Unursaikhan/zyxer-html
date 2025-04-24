import { connect } from "mongoose";
export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://ZyXeR:Unuu1019@cluster0.hrd1pvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("connected to database");
};
