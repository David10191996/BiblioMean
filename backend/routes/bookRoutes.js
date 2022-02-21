import express from "express";
import bookController from "../controllers/bookController.js";
import userController from "../controllers/userController.js";
import bookMidd from "../middleware/bookValidate.js";
//import user from "../models/user.js";

const router = express.Router();

router.post(
  "/registerBook",
  bookMidd.validateBook,
  bookController.registerBook
);

router.delete("/deleteBook/:id", bookController.deleteBook);

router.get("/listBook/name:?", bookController.listBook)

export default router;
