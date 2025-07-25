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

// ✅ Allow multiple frontend domains (optional)
const allowedOrigins = [
  "https://login-register-front-ten.vercel.app",
  "http://localhost:5173", 
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use("/api/users", userRouter);
app.use("/api", authRouter); 

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
