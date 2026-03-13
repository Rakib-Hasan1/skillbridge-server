export declare const createReviewService: (bookingId: string, studentId: string, rating: number, comment: string) => Promise<{
    id: string;
    rating: number;
    createdAt: Date;
    studentId: string;
    tutorProfileId: string;
    comment: string;
    bookingId: string;
}>;
export declare const getTutorReviewsService: (tutorId: string) => Promise<({
    student: {
        name: string;
        image: string | null;
    };
} & {
    id: string;
    rating: number;
    createdAt: Date;
    studentId: string;
    tutorProfileId: string;
    comment: string;
    bookingId: string;
})[]>;
//# sourceMappingURL=review.service.d.ts.map