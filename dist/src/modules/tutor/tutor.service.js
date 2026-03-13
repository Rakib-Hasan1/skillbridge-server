import { prisma } from "../../lib/prisma";
const searchTutorsService = async (filters) => {
    const { category, minPrice, maxPrice, rating } = filters;
    const where = {};
    // ⭐ Rating filter
    if (rating) {
        where.rating = {
            gte: rating,
        };
    }
    // 💰 Price filter
    if (minPrice || maxPrice) {
        where.hourlyRate = {
            gte: minPrice ?? 0,
            lte: maxPrice ?? 100000,
        };
    }
    // 📚 Category filter
    if (category) {
        where.categories = {
            some: {
                name: {
                    contains: category,
                    mode: "insensitive",
                },
            },
        };
    }
    const tutors = await prisma.tutorProfile.findMany({
        where,
        include: {
            user: true,
            categories: true,
        },
    });
    return tutors;
};
export const tutorService = {
    searchTutorsService,
};
//# sourceMappingURL=tutor.service.js.map