import { prisma } from "../../lib/prisma";

type CreateTutorProfilePayload = {
  bio: string;
  hourlyRate: number;
  subjects: string[];
  categoryIds?: string[]; // optional
};

const createProfile = async (
  payload: CreateTutorProfilePayload,
  userId: string,
) => {
  const { bio, hourlyRate, subjects } = payload;

  const data = {
    userId,
    bio,
    hourlyRate,
    subjects,
    rating: 0,
  } as const;

  const existing = await prisma.tutorProfile.findUnique({
    where: { userId },
  });

  if (existing) {
    throw new Error("Tutor profile already exists");
  }
  const result = await prisma.tutorProfile.create({
    data: {
      ...data,
      userId,
    },
  });
  return result;
};

const getProfile = async () => {
  const result = await prisma.tutorProfile.findMany();
  return result;
};
const getSingleProfile = async (tutorId: string) => {
  const result = await prisma.tutorProfile.findUnique({
    where: {
      id: tutorId,
    },
  });
  return result;
};

export const TutorProfileService = {
  createProfile,
  getProfile,
  getSingleProfile,
};
