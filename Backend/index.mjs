import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/userRouters.js";
import route from "./routes/loginregisterRouters.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// 1. Enable CORS before any route or body parser
app.use(
  cors({
    origin: "https://login-register-front-ten.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // explicitly allow methods
  })
);

// 2. Parse JSON bodies
app.use(express.json());

// 3. Connect DB early
connectDB();

// 4. Setup your routes
app.use("/api/users", router);
app.use("/api", route);

// 5. Catch-all 404 handler (optional but recommended)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
