import app from "../src/app";
import { prisma } from "../src/lib/prisma";


// Ensure DB connection
async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();

// Export app as handler for Vercel
export default app;