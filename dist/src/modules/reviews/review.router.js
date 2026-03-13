// routes/review.route.ts
import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { createReviewController, getTutorReviewsController, } from "./review.controller";
const router = express.Router();
router.post("/", auth(UserRole.STUDENT), createReviewController);
router.get("/", auth(UserRole.TUTOR), getTutorReviewsController);
export const reviewsRouter = router;
//# sourceMappingURL=review.router.js.map