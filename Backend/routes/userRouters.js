import express from "express";
import {
  getuserController,
  createuserController,
  updateuserController,
  updateonlyoneController,
  getuserControllerById
} from "../controllers/userController.js";

const router = express.Router();

router.get("/get", getuserController);
router.get("/:id", getuserControllerById);
router.post("/create", createuserController);
router.put("/update/:id", updateuserController);
router.put("/update/one/:id", updateonlyoneController);
router.patch("/patch/:id", updateonlyoneController);

export default router;
