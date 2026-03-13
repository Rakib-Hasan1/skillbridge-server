export declare const bookingServices: {
    createBooking: (slotId: string, studentId: string, tutorId: string) => Promise<{
        id: string;
        createdAt: Date;
        slotId: string;
        studentId: string;
        status: string;
        tutorProfileId: string;
    }>;
    getMyBookings: (studentId: string) => Promise<({
        tutorProfile: {
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
        } & {
            id: string;
            bio: string;
            hourlyRate: number;
            subjects: string[];
            rating: number;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
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
        review: {
            id: string;
            rating: number;
            createdAt: Date;
            studentId: string;
            tutorProfileId: string;
            comment: string;
            bookingId: string;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        slotId: string;
        studentId: string;
        status: string;
        tutorProfileId: string;
    })[]>;
};
//# sourceMappingURL=booking.service.d.ts.map