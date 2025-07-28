import express from "express";
import User from "../model/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

export default router;
