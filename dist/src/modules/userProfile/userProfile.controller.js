import { userProfileService } from "./userProfile.service";
const getMyProfile = async (req, res) => {
    try {
        const user = req.user;
        if (!user) {
            throw new Error("user not found or unauthorized request!");
        }
        const result = await userProfileService.getMyProfile(user.id);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Get my profile failed!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
export const userProfileController = {
    getMyProfile,
};
//# sourceMappingURL=userProfile.controller.js.map