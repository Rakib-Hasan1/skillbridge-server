import { prisma } from "../../lib/prisma";

interface CreateAvailabilityPayload {
  day: string;
  startTime: string;
  endTime: string;
}

const createAvailability = async (
  payload: CreateAvailabilityPayload,
  userId: string,
) => {
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

const getMyAvailability = async (userId: string) => {
  const tutor = await prisma.tutorProfile.findUnique({
    where: { userId },
  });

  if (!tutor) throw new Error("Tutor not found");

  return prisma.tutorAvailability.findMany({
    where: { tutorId: tutor.id },
    orderBy: { createdAt: "desc" },
  });
};

const getTutorAvailability = async (tutorId: string) => {
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

export const tutorAvailabilityServices = {
  createAvailability,
  getTutorAvailability,
  getMyAvailability
};
