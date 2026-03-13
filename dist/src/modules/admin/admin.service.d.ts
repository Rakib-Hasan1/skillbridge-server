export declare const getAllUsersService: () => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    role: import("../../../generated/prisma/enums").Role;
    image: string | null;
    isBanned: boolean;
}[]>;
export declare const getAllBookingsService: () => Promise<({
    tutorProfile: {
        id: string;
        bio: string;
        hourlyRate: number;
        user: {
            id: string;
            name: string;
            email: string;
        };
    };
    student: {
        id: string;
        name: string;
        email: string;
    };
    slot: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tutorId: string;
        day: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
    };
} & {
    id: string;
    createdAt: Date;
    slotId: string;
    studentId: string;
    status: string;
    tutorProfileId: string;
})[]>;
export declare const toggleUserBanService: (userId: string, ban: boolean) => Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    role: import("../../../generated/prisma/enums").Role;
    emailVerified: boolean;
    image: string | null;
    isBanned: boolean;
}>;
//# sourceMappingURL=admin.service.d.ts.map