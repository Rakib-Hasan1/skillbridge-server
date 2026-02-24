import { prisma } from "../../lib/prisma";

const createAvailability = async (userId: string, payload: any) => {
  // 1️⃣ Find tutor profile
  const tutorProfile = await prisma.tutorProfile.findUnique({
    where: { userId },
  });

  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  // 2️⃣ Prevent duplicate slot
  const existing = await prisma.tutorAvailability.findFirst({
    where: {
      tutorId: tutorProfile.id,
      day: payload.day,
      startTime: payload.startTime,
      endTime: payload.endTime,
    },
  });

  if (existing) {
    throw new Error("Slot already exists");
  }

  // 3️⃣ Create slot
  return prisma.tutorAvailability.create({
    data: {
      tutorId: tutorProfile.id,
      day: payload.day,
      startTime: payload.startTime,
      endTime: payload.endTime,
    },
  });
};


const getAvailability = async (tutorId: string) => {
  return prisma.tutorAvailability.findMany({
    where: {
      tutorId,
      isBooked: false,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
};

export const tutorAvailabilityServices = {
  createAvailability,
  getAvailability
};
