import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { tutorAvailabilityController } from "./available.controller";

const router = express.Router();

// Tutor creates slot
router.post(
  "/",
  auth(UserRole.TUTOR),
  tutorAvailabilityController.createAvailability,
);
router.get(
  "/my",
  auth(UserRole.TUTOR),
  tutorAvailabilityController.getMyAvailability,
);

export const availabilityRouter = router;
