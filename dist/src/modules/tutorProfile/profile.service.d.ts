type CreateTutorProfilePayload = {
    bio: string;
    hourlyRate: number;
    subjects: string[];
    categoryIds?: string[];
};
export declare const TutorProfileService: {
    createProfile: (payload: CreateTutorProfilePayload, userId: string) => Promise<{
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
    }>;
    getProfile: () => Promise<({
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
        bookings: ({
            student: {
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
        } & {
            id: string;
            createdAt: Date;
            slotId: string;
            studentId: string;
            status: string;
            tutorProfileId: string;
        })[];
        reviews: ({
            tutorProfile: {
                id: string;
                bio: string;
                hourlyRate: number;
                subjects: string[];
                rating: number;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
            };
            student: {
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
        } & {
            id: string;
            rating: number;
            createdAt: Date;
            studentId: string;
            tutorProfileId: string;
            comment: string;
            bookingId: string;
        })[];
        categories: {
            id: string;
            name: string;
        }[];
        tutorAvailabilities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tutorId: string;
            day: string;
            startTime: string;
            endTime: string;
            isBooked: boolean;
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
    getSingleProfile: (tutorId: string) => Promise<({
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
        bookings: ({
            student: {
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
        } & {
            id: string;
            createdAt: Date;
            slotId: string;
            studentId: string;
            status: string;
            tutorProfileId: string;
        })[];
        reviews: ({
            tutorProfile: {
                id: string;
                bio: string;
                hourlyRate: number;
                subjects: string[];
                rating: number;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
            };
            student: {
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
        } & {
            id: string;
            rating: number;
            createdAt: Date;
            studentId: string;
            tutorProfileId: string;
            comment: string;
            bookingId: string;
        })[];
        categories: {
            id: string;
            name: string;
        }[];
        tutorAvailabilities: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tutorId: string;
            day: string;
            startTime: string;
            endTime: string;
            isBooked: boolean;
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
    }) | null>;
};
export {};
//# sourceMappingURL=profile.service.d.ts.map