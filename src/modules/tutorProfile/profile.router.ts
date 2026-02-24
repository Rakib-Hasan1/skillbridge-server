import express from "express";
import { TutorProfileController } from "./profile.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.post("/", auth(UserRole.STUDENT), TutorProfileController.createProfile);
router.get("/", TutorProfileController.getProfile);
router.get("/:tutorId", TutorProfileController.getSingleProfile);

export const profileRouter = router;
