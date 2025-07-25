import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouters.js";
import authRouter from "./routes/loginregisterRouters.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

// CORS config
app.use(
  cors({
    origin: "https://login-register-front-ten.vercel.app",
    credentials: true,
  })
);

app.use(express.json());

// Optional: Basic test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRouter);
app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
