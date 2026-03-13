import { prisma } from "../../lib/prisma";
const createCategory = async (payload) => {
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
const deleteCategory = async (categoryId) => {
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
//# sourceMappingURL=category.service.js.map