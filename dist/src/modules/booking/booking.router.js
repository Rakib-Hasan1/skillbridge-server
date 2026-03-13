import express from "express";
import { bookingController } from "./booking.controller";
import auth, { UserRole } from "../../middlewares/auth";
const router = express.Router();
router.post("/", auth(UserRole.STUDENT), bookingController.createBooking);
router.get("/my", bookingController.getMyBookings);
export const bookingRouter = router;
//# sourceMappingURL=booking.router.js.map