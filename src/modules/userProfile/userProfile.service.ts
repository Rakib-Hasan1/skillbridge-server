import { prisma } from "../../lib/prisma";

const getMyProfile = async (userId: string) => {
  const result = prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
    },
  });
  return result;
};

export const userProfileService = {
  getMyProfile,
};
