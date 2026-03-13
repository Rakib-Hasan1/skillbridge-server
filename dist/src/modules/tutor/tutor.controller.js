import { tutorService } from "./tutor.service";
const searchTutorsController = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, rating } = req.query;
        const tutors = await tutorService.searchTutorsService({
            category: category,
            minPrice: Number(minPrice),
            maxPrice: Number(maxPrice),
            rating: Number(rating),
        });
        res.json({
            success: true,
            data: tutors,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const tutorController = {
    searchTutorsController,
};
//# sourceMappingURL=tutor.controller.js.map