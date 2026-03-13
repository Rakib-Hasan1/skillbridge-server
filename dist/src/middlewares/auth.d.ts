import { NextFunction, Request, Response } from "express";
export declare enum UserRole {
    STUDENT = "STUDENT",
    ADMIN = "ADMIN",
    TUTOR = "TUTOR"
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
                emailVerified: boolean;
                image: string;
            };
        }
    }
}
declare const auth: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default auth;
//# sourceMappingURL=auth.d.ts.map