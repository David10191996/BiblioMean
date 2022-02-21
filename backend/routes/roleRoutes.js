import express from "express";
import roleController from "../controllers/roleController.js";
import roleMidd from "../middleware/roleValidate.js"


const router = express.Router();

router.post("/registerRole", roleMidd.existingRole,roleController.registerRole);

router.get("/listRol", roleController.listRol);

export default router;
