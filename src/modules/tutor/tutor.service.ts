import { prisma } from "../../lib/prisma";

// interface SearchFilters {
//   category?: string;
//   minPrice?: number;
//   maxPrice?: number;
//   rating?: number;
// }

interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
}

const searchTutorsService = async (filters: SearchFilters) => {
  const { category, minPrice, maxPrice, rating } = filters;

  const where: any = {};

  // ⭐ Rating filter
  if (rating) {
    where.rating = {
      gte: rating,
    };
  }

  // 💰 Price filter
  if (minPrice || maxPrice) {
    where.hourlyRate = {
      gte: minPrice ?? 0,
      lte: maxPrice ?? 100000,
    };
  }

  // 📚 Category filter
  if (category) {
    where.categories = {
      some: {
        name: {
          contains: category,
          mode: "insensitive",
        },
      },
    };
  }

  const tutors = await prisma.tutorProfile.findMany({
    where,
    include: {
      user: true,
      categories: true,
    },
  });

  return tutors;
};

export const tutorService = {
  searchTutorsService,
};
