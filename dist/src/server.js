import app from "./app";
import { prisma } from "./lib/prisma";
async function main() {
    try {
        await prisma.$connect();
        console.log("Connected to the database successfully!");
    }
    catch (error) {
        console.error("An error occurred:", error);
        await prisma.$disconnect();
        process.exit(1);
    }
}
main();
// Export only the app for Vercel
export default app;
//# sourceMappingURL=server.js.map