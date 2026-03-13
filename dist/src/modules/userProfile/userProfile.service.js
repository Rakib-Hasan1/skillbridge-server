import { prisma } from "../../lib/prisma";
const getMyProfile = async (userId) => {
    const result = prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
        },
    });
    return result;
};
export const userProfileService = {
    getMyProfile,
};
//# sourceMappingURL=userProfile.service.js.map