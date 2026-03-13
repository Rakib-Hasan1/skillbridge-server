interface CreateAvailabilityPayload {
    day: string;
    startTime: string;
    endTime: string;
}
export declare const tutorAvailabilityServices: {
    createAvailability: (payload: CreateAvailabilityPayload, userId: string) => Promise<any>;
    getTutorAvailability: (tutorId: string) => Promise<any>;
    getMyAvailability: (userId: string) => Promise<any>;
    getTutorSessionsService: (tutorId: string) => Promise<any>;
};
export {};
//# sourceMappingURL=available.service.d.ts.map