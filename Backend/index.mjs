import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/userRouters.js";
import route from "./routes/loginregisterRouters.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "https://login-register-front-ten.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/users", router);
app.use("/api", route);

connectDB();

app.listen(PORT, () => {
  console.log("Server is running on 4000");
});
