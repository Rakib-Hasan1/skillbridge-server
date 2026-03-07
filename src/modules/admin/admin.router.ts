import express from "express";
import {
  getAllBookingsController,
  getAllUsersController,
  toggleUserBanController,
} from "./admin.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

router.get("/users", auth(UserRole.ADMIN), getAllUsersController);
router.get("/bookings", auth(UserRole.ADMIN), getAllBookingsController);
router.patch(
  "/users/:userId/ban",
  auth(UserRole.ADMIN),
  toggleUserBanController,
);

export const adminRouter = router;
