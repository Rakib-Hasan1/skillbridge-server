import { prisma } from "../../lib/prisma";

export const getAllUsersService = async () => {
  const users = await prisma.user.findMany({
    where: { role: { not: "ADMIN" } },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      createdAt: true,
      isBanned: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return users;
};

export const getAllBookingsService = async () => {
  const bookings = await prisma.booking.findMany({
    include: {
      student: { select: { id: true, name: true, email: true } },
      tutorProfile: {
        select: {
          id: true,
          user: { select: { id: true, name: true, email: true } },
          bio: true,
          hourlyRate: true,
        },
      },
      slot: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return bookings;
};

export const toggleUserBanService = async (userId: string, ban: boolean) => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { isBanned: ban },
  });
  return user;
};
