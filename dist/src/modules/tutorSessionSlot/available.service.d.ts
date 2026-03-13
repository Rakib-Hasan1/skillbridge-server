interface CreateAvailabilityPayload {
    day: string;
    startTime: string;
    endTime: string;
}
export declare const tutorAvailabilityServices: {
    createAvailability: (payload: CreateAvailabilityPayload, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tutorId: string;
        day: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
    }>;
    getTutorAvailability: (tutorId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tutorId: string;
        day: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
    }[]>;
    getMyAvailability: (userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        tutorId: string;
        day: string;
        startTime: string;
        endTime: string;
        isBooked: boolean;
    }[]>;
    getTutorSessionsService: (tutorId: string) => Promise<({
        student: {
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
};
export {};
//# sourceMappingURL=available.service.d.ts.map