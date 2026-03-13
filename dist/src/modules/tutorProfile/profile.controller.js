import { TutorProfileService } from "./profile.service";
const createProfile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(400).json({
                error: "Unauthorized!",
            });
        }
        const result = await TutorProfileService.createProfile(req.body, req.user.id);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Profile creation failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
const getProfile = async (req, res) => {
    try {
        const result = await TutorProfileService.getProfile();
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Tutor Profile Fetched failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
const getSingleProfile = async (req, res) => {
    try {
        const { tutorId } = req.params;
        const result = await TutorProfileService.getSingleProfile(tutorId);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Tutor Profile Fetched failed!!",
            message: error instanceof Error ? error.message : "Unknown error",
        });
    }
};
export const TutorProfileController = {
    createProfile,
    getProfile,
    getSingleProfile,
};
//# sourceMappingURL=profile.controller.js.map