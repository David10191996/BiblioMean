import express from "express";
import userController from "../controllers/userController.js";
import userMidd from "../middleware/userValidate.js";
import roleMidd from "../middleware/roleValidate.js";

const router = express.Router();

router.post(
  "/registerUser",
  userMidd.existingUser,
  roleMidd.existRol,
  userController.registerUser
);

router.get("/listUser/:name?", userController.listUser);

router.post("/login", userController.login);

export default router;