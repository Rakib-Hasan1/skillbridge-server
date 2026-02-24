import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { tutorAvailabilityController } from "./availability.controller";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.TUTOR),
  tutorAvailabilityController.createAvailability,
);

router.get("/:tutorId", tutorAvailabilityController.getAvailability);

export const tutorAvailabilityRouter = router;
