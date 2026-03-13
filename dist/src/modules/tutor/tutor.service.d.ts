interface SearchFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    rating?: number;
}
export declare const tutorService: {
    searchTutorsService: (filters: SearchFilters) => Promise<({
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            email: string;
            role: import("../../../generated/prisma/enums").Role;
            emailVerified: boolean;
            image: string | null;
            isBanned: boolean;
        };
        categories: {
            id: string;
            name: string;
        }[];
    } & {
        id: string;
        bio: string;
        hourlyRate: number;
        subjects: string[];
        rating: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    })[]>;
};
export {};
//# sourceMappingURL=tutor.service.d.ts.map