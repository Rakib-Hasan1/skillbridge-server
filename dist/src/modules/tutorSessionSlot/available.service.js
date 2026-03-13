import { prisma } from "../../lib/prisma";
const createAvailability = async (payload, userId) => {
    const { day, startTime, endTime } = payload;
    // 1️⃣ Find tutor profile using userId
    const tutorProfile = await prisma.tutorProfile.findUnique({
        where: { userId },
    });
    if (!tutorProfile) {
        throw new Error("Tutor profile not found");
    }
    // 2️⃣ Create slot
    const slot = await prisma.tutorAvailability.create({
        data: {
            tutorId: tutorProfile.id,
            day,
            startTime,
            endTime,
        },
    });
    return slot;
};
const getMyAvailability = async (userId) => {
    const tutor = await prisma.tutorProfile.findUnique({
        where: { userId },
    });
    if (!tutor)
        throw new Error("Tutor not found");
    return prisma.tutorAvailability.findMany({
        where: { tutorId: tutor.id },
        orderBy: { createdAt: "desc" },
    });
};
const getTutorAvailability = async (tutorId) => {
    return prisma.tutorAvailability.findMany({
        where: {
            tutorId,
            isBooked: false,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
};
const getTutorSessionsService = async (tutorId) => {
    const tutor = await prisma.tutorProfile.findUnique({
        where: {
            userId: tutorId,
        },
    });
    if (!tutor)
        throw new Error("Tutor not found");
    const sessions = await prisma.booking.findMany({
        where: {
            tutorProfileId: tutor.id,
        },
        include: {
            student: {
                select: {
                    name: true,
                    email: true,
                },
            },
            slot: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return sessions;
};
export const tutorAvailabilityServices = {
    createAvailability,
    getTutorAvailability,
    getMyAvailability,
    getTutorSessionsService,
};
//# sourceMappingURL=available.service.js.map