import { Category } from "../../../generated/prisma/client";
export declare const categoryService: {
    createCategory: (payload: Category) => Promise<{
        id: string;
        name: string;
    }>;
    getCategory: () => Promise<({
        tutors: {
            id: string;
            bio: string;
            hourlyRate: number;
            subjects: string[];
            rating: number;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
        }[];
    } & {
        id: string;
        name: string;
    })[]>;
    deleteCategory: (categoryId: string) => Promise<{
        id: string;
        name: string;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map