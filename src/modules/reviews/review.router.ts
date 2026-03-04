// routes/review.route.ts
import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { createReviewController } from "./review.controller";

const router = express.Router();

// POST /api/reviews
router.post("/", auth(UserRole.STUDENT), createReviewController);

export const reviewsRouter = router;
