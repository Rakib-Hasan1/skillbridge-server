// services/review.service.ts
import { prisma } from "../../lib/prisma";
export const createReviewService = async (bookingId, studentId, rating, comment) => {
    // 1. Find booking
    const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
    });
    if (!booking)
        throw new Error("Booking not found");
    if (booking.studentId !== studentId)
        throw new Error("You can only review your own bookings");
    // 2. Create review
    const review = await prisma.review.create({
        data: {
            bookingId,
            tutorProfileId: booking.tutorProfileId,
            studentId,
            rating,
            comment,
        },
    });
    // 3. Update tutor average rating
    const stats = await prisma.review.aggregate({
        where: { tutorProfileId: booking.tutorProfileId },
        _avg: { rating: true },
    });
    await prisma.tutorProfile.update({
        where: { id: booking.tutorProfileId },
        data: { rating: stats._avg.rating || 0 },
    });
    return review;
};
export const getTutorReviewsService = async (tutorId) => {
    const tutor = await prisma.tutorProfile.findUnique({
        where: {
            userId: tutorId,
        },
    });
    if (!tutor)
        throw new Error("Tutor not found");
    const reviews = await prisma.review.findMany({
        where: {
            tutorProfileId: tutor.id,
        },
        include: {
            student: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return reviews;
};
//# sourceMappingURL=review.service.js.map