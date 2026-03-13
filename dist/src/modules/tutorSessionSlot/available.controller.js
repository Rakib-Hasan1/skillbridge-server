import { tutorAvailabilityServices } from "./available.service";
const createAvailability = async (req, res) => {
    try {
        const userId = req.user?.id; // from auth middleware
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const result = await tutorAvailabilityServices.createAvailability(req.body, userId);
        res.status(201).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
        });
    }
};
const getMyAvailability = async (req, res) => {
    try {
        const userId = req.user?.id;
        const slots = await tutorAvailabilityServices.getMyAvailability(userId);
        res.status(200).json({
            success: true,
            data: slots,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getTutorAvailability = async (req, res) => {
    try {
        const { tutorId } = req.params;
        const slots = await tutorAvailabilityServices.getTutorAvailability(tutorId);
        res.status(200).json({
            success: true,
            data: slots,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "Something went wrong",
        });
    }
};
const getTutorSessionsController = async (req, res) => {
    try {
        const tutorId = req.user?.id;
        const sessions = await tutorAvailabilityServices.getTutorSessionsService(tutorId);
        res.json({
            success: true,
            data: sessions,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const tutorAvailabilityController = {
    createAvailability,
    getTutorAvailability,
    getMyAvailability,
    getTutorSessionsController,
};
//# sourceMappingURL=available.controller.js.map