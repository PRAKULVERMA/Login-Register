import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../config/db.js";
import authRouter from "../routes/loginregisterRouters.js";
import userRouter from "../routes/userRouters.js";

dotenv.config();
await connectDB();

const app = express();

const allowedOrigins = [
  "https://login-register-front-ten.vercel.app",
  "http://localhost:5173",
];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));

app.use("/api", authRouter);
app.use("/api/users", userRouter);

app.use((req, res) => res.status(404).json({ message: "Route not found" }));

export default app;
