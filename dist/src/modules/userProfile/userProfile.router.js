import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { userProfileController } from "./userProfile.controller";
const router = express.Router();
router.get("/me", auth(UserRole.STUDENT), userProfileController.getMyProfile);
export const userProfileRouter = router;
//# sourceMappingURL=userProfile.router.js.map