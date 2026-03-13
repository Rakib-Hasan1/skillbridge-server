type CreateTutorProfilePayload = {
    bio: string;
    hourlyRate: number;
    subjects: string[];
    categoryIds?: string[];
};
export declare const TutorProfileService: {
    createProfile: (payload: CreateTutorProfilePayload, userId: string) => Promise<any>;
    getProfile: () => Promise<any>;
    getSingleProfile: (tutorId: string) => Promise<any>;
};
export {};
//# sourceMappingURL=profile.service.d.ts.map