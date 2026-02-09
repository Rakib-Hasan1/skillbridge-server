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
  const result = await prisma.tutorProfile.findMany({
    include: {
      user: true, // includes all user info
      categories: true, // all categories
      reviews: {
        include: {
          user: true, // if Review has a relation to User
        },
      },
      tutorAvailabilities: true,
      bookings: {
        where: { status: "confirmed" }, // optional, only upcoming or confirmed bookings
        include: {
          user: true,
        },
      },
    },
  });
  return result;
};
const getSingleProfile = async (tutorId: string) => {
  const result = await prisma.tutorProfile.findUnique({
    where: { id: tutorId },
    include: {
      user: true, // includes all user info
      categories: true, // all categories
      reviews: {
        include: {
          user: true, // if Review has a relation to User
        },
      },
      tutorAvailabilities: true,
      bookings: {
        where: { status: "confirmed" }, // optional, only upcoming or confirmed bookings
        include: {
          user: true,
        },
      },
    },
  });
  return result;
};

export const TutorProfileService = {
  createProfile,
  getProfile,
  getSingleProfile,
};
