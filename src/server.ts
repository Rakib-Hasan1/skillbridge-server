import app from "./app";
import { prisma } from "./lib/prisma";

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

// Export only the app for Vercel
export default app;

// import app from "./app";
// import { prisma } from "./lib/prisma";

// const PORT = process.env.PORT || 5000;

// async function main() {
//   try {
//     await prisma.$connect();
//     console.log("Connected to the database successfully.!");

//     app.listen(PORT, () => {
//       console.log("Database connected successfully on port :", PORT);
//     });
//   } catch (error) {
//     console.log("An error occured :", error);
//     await prisma.$disconnect();
//     process.exit(1);
//   }
// }

// main();

// // Export the app for Vercel
// export default app;
