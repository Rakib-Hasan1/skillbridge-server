import express from "express";

import auth, { UserRole } from "../../middlewares/auth";
import { bookingController } from "./booking.controller";

const router = express.Router();

router.post("/", auth(UserRole.TUTOR), bookingController.createBooking);
// router.get("/", );

export const bookingRouter = router;
