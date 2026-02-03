import express from "express";
import { TutorProfileController } from "./profile.controller";

const router = express.Router();

router.post("/", TutorProfileController.createProfile)

export const profileRouter = router;
