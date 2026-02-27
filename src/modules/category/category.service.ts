import { Category } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createCategory = async (payload: Category) => {
  const result = await prisma.category.create({
    data: payload,
  });
  return result;
};

const getCategory = async () => {
  const result = await prisma.category.findMany({
    include: {
      tutors: true,
    },
  });
  return result;
};
const deleteCategory = async (categoryId: string) => {
  const result = await prisma.category.delete({
    where: {
      id: categoryId,
    },
  });
  return result;
};

export const categoryService = {
  createCategory,
  getCategory,
  deleteCategory
};
