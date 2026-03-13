import { getAllBookingsService, getAllUsersService, toggleUserBanService } from "./admin.service";
export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json({
            success: true,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const getAllBookingsController = async (req, res) => {
    try {
        const bookings = await getAllBookingsService();
        res.status(200).json({
            success: true,
            data: bookings,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const toggleUserBanController = async (req, res) => {
    try {
        const { userId } = req.params;
        const { ban } = req.body;
        if (typeof ban !== "boolean") {
            return res.status(400).json({ success: false, message: "Invalid ban value" });
        }
        const user = await toggleUserBanService(userId, ban);
        res.status(200).json({
            success: true,
            data: user,
            message: `User has been ${ban ? "banned" : "unbanned"} successfully`,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
//# sourceMappingURL=admin.controller.js.map