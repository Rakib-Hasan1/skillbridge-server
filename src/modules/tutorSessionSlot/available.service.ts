import { prisma } from "../../lib/prisma";

type CreateAvailabilityPayload = {
  startTime: string;
  endTime: string;
};

const createAvailability = async (
  userId: string,
  payload: CreateAvailabilityPayload,
) => {
  const tutorProfile = await prisma.tutorProfile.findUnique({
    where: { userId },
  });

  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  return prisma.tutorAvailability.create({
    data: {
      tutorId: tutorProfile.id,
      startTime: new Date(payload.startTime),
      endTime: new Date(payload.endTime),
    },
  });
};

export const tutorAvailabilityService = {
  createAvailability,
};
