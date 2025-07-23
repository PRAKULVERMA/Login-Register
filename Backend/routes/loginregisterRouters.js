import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/loginController.js";
import { authenticate } from "../middleware/loginMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

// Example protected route
router.get("/dashboard", authenticate, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

export default router;
