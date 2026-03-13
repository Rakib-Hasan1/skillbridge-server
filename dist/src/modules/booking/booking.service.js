import { prisma } from "../../lib/prisma";
const createBooking = async (slotId, studentId, tutorId) => {
    // 1️⃣ Check slot exists
    const slot = await prisma.tutorAvailability.findUnique({
        where: { id: slotId },
    });
    if (!slot) {
        throw new Error("Slot not found");
    }
    const exitsTutor = await prisma.tutorProfile.findUnique({
        where: {
            id: tutorId,
        },
    });
    if (!exitsTutor) {
        throw new Error("Tutor doesn't exits!");
    }
    // 2️⃣ Check if already booked
    const existingBooking = await prisma.booking.findUnique({
        where: { slotId }, // make slotId unique in Booking model
    });
    if (existingBooking) {
        throw new Error("Slot already booked");
    }
    // 3️⃣ Create booking
    const booking = await prisma.booking.create({
        data: {
            slotId,
            studentId,
            tutorProfileId: tutorId,
        },
    });
    return booking;
};
const getMyBookings = async (studentId) => {
    return prisma.booking.findMany({
        where: { studentId },
        include: {
            tutorProfile: {
                include: {
                    user: true,
                },
            },
            slot: true,
            review: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
export const bookingServices = {
    createBooking,
    getMyBookings,
};
//# sourceMappingURL=booking.service.js.map