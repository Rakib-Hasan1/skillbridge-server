import express from "express";

import auth, { UserRole } from "../../middlewares/auth";
import { categoryController } from "./category.controller";

const router = express.Router();

router.post("/", auth(UserRole.ADMIN), categoryController.createCategory);
router.delete("/:id", auth(UserRole.ADMIN), categoryController.deleteCategory);
router.get("/", categoryController.getCategory);

export const categoryRouter = router;
