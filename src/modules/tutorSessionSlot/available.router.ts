import express from "express";
import { tutorAvailabilityController } from "./available.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.TUTOR),
  tutorAvailabilityController.createAvailability,
);

export const availableRouter = router;
