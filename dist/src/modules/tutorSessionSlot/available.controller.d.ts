import { Request, Response } from "express";
export declare const tutorAvailabilityController: {
    createAvailability: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getTutorAvailability: (req: Request, res: Response) => Promise<void>;
    getMyAvailability: (req: Request, res: Response) => Promise<void>;
    getTutorSessionsController: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=available.controller.d.ts.map