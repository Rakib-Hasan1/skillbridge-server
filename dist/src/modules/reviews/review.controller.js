import { createReviewService, getTutorReviewsService } from "./review.service";
export const createReviewController = async (req, res) => {
    try {
        const { bookingId, rating, comment } = req.body;
        const user = req.user; // Better Auth sets this
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        // Get student id from auth middleware
        const studentId = user.id;
        const review = await createReviewService(bookingId, studentId, rating, comment);
        res.json({ success: true, data: review });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const getTutorReviewsController = async (req, res) => {
    try {
        const tutorId = req.user?.id;
        const reviews = await getTutorReviewsService(tutorId);
        res.json({
            success: true,
            data: reviews,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
//# sourceMappingURL=review.controller.js.map