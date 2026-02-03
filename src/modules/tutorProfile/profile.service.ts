import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createProfile = async (data: Prisma.TutorProfileCreateInput) => {
  const result = await prisma.tutorProfile.create({
    data,
  });
  return result;
};

export const TutorProfileService = {
  createProfile,
};
