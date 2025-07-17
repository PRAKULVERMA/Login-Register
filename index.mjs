import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/userRouters.js";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/users", router);
app.get("/", router)

connectDB();

app.listen(4000, () => {
  console.log("Server is running on 4000");
});
