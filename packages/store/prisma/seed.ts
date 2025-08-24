// console.log("🔥 Seed script started");
// import 'dotenv/config'; 
// import { PrismaClient } from "@prisma/client";

// console.log("✅ Prisma client imported successfully");

// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: process.env.DATABASE_URL, // reads DATABASE_URL from env
//     },
//   },
// });

// async function main() {
//   console.log("Starting database seeding...");

//   try {
//     console.log("Using DB URL:", process.env.DATABASE_URL);
//     // Test database connection
//     await prisma.$connect();
//     console.log("✅ Connected to database");

//     // Insert regions
//     const regions = await prisma.region.createMany({
//       data: [
//         { id: "32c9087b-7c53-4d84-8b63-32517cbd17c3", name: "india" },
//         { id: "f5a13f6c-8e91-42b8-9c0e-07b4567a98e0", name: "usa" }
//       ],
//       skipDuplicates: true
//     });
    
//     console.log(`✅ Regions seeded successfully (${regions.count} regions created)`);
    
//     // Verify regions were created
//     const regionCount = await prisma.region.count();
//     console.log(`✅ Total regions in database: ${regionCount}`);
    
//     // List all regions to verify
//     const allRegions = await prisma.region.findMany();
//     console.log("✅ All regions:", allRegions);
    
//   } catch (error) {
//     console.error("❌ Error seeding database:", error);
//     if (error instanceof Error) {
//       console.error(error.stack); // 🔥 added detailed stack trace logging
//     }
//     throw error;
//   }
// }

// main()
//   .then(() => {
//     console.log("✅ Database seeding completed successfully");
//   })
//   .catch((e) => {
//     console.error("❌ Database seeding failed:", e);
//     if (e instanceof Error) {
//       console.error(e.stack); // 🔥 also log stack trace here
//     }
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//     console.log("✅ Database connection closed");
//   });

// console.log("🔥 Seed script started");
// import 'dotenv/config';
// import { PrismaClient } from "@prisma/client";
// //import { PrismaClient } from './../../node_modules/@prisma/client';

// console.log("✅ Prisma client imported successfully");

// const prisma = new PrismaClient(); // automatically reads DATABASE_URL

// async function main() {
//   console.log("Starting database seeding...");
//   console.log("Using DB URL:", process.env.DATABASE_URL);

//   try {
//     // Test database connection
//     await prisma.$connect();
//     console.log("✅ Connected to database");

//     // Insert regions
//     const regions = await prisma.region.createMany({
//       data: [
//         { id: "32c9087b-7c53-4d84-8b63-32517cbd17c3", name: "india" },
//         { id: "f5a13f6c-8e91-42b8-9c0e-07b4567a98e0", name: "usa" }
//       ],
//       skipDuplicates: true
//     });

//     console.log(`✅ Regions seeded successfully (${regions.count} regions created)`);

//     // Verify regions were created
//     const regionCount = await prisma.region.count();
//     console.log(`✅ Total regions in database: ${regionCount}`);

//     // List all regions to verify
//     const allRegions = await prisma.region.findMany();
//     console.log("✅ All regions:", allRegions);

//   } catch (error) {
//     console.error("❌ Error seeding database:", error);
//     if (error instanceof Error) {
//       console.error(error.stack); // detailed stack trace
//     }
//     throw error;
//   } finally {
//     await prisma.$disconnect();
//     console.log("✅ Database connection closed");
//   }
// }

// main()
//   .then(() => console.log("✅ Database seeding completed successfully"))
//   .catch((e) => {
//     console.error("❌ Database seeding failed:", e);
//     if (e instanceof Error) console.error(e.stack);
//     process.exit(1);
//   });



// console.log("🔥 Seed script started");
// import 'dotenv/config';
// import { PrismaClient } from "@prisma/client";
// import path from "path";
// import fs from "fs";

// console.log("✅ Prisma client imported successfully");

// // Log PrismaClient path and version
// const prismaClientPath = require.resolve("@prisma/client");
// console.log("📦 PrismaClient loaded from:", prismaClientPath);

// const prismaFolder = path.join(prismaClientPath, "..");
// if (fs.existsSync(prismaFolder)) {
//   console.log("✅ Prisma client folder exists:", prismaFolder);
// } else {
//   console.warn("❌ Prisma client folder NOT found:", prismaFolder);
// }

// // Optional: log Prisma Client version
// try {
//   const { version } = require("@prisma/client/package.json");
//   console.log("🔖 Prisma Client version:", version);
// } catch {
//   console.warn("⚠️ Could not determine Prisma Client version");
// }

// // Initialize Prisma client
// const prisma = new PrismaClient(); // automatically reads DATABASE_URL

// async function main() {
//   console.log("Starting database seeding...");
//   console.log("Using DB URL:", process.env.DATABASE_URL);

//   try {
//     // Test database connection
//     try {
//       await prisma.$connect();
//       console.log("✅ Connected to database");
//     } catch (err) {
//       console.error("❌ Could not connect to database:", err);
//     }

//     // Insert regions
//     const regions = await prisma.region.createMany({
//       data: [
//         { id: "32c9087b-7c53-4d84-8b63-32517cbd17c3", name: "india" },
//         { id: "f5a13f6c-8e91-42b8-9c0e-07b4567a98e0", name: "usa" }
//       ],
//       skipDuplicates: true
//     });

//     console.log(`✅ Regions seeded successfully (${regions.count} regions created)`);

//     // Verify regions were created
//     const regionCount = await prisma.region.count();
//     console.log(`✅ Total regions in database: ${regionCount}`);

//     // List all regions to verify
//     const allRegions = await prisma.region.findMany();
//     console.log("✅ All regions:", allRegions);

//   } catch (error) {
//     console.error("❌ Error seeding database:", error);
//     if (error instanceof Error) {
//       console.error(error.stack); // detailed stack trace
//     }
//     throw error;
//   } finally {
//     await prisma.$disconnect();
//     console.log("✅ Database connection closed");
//   }
// }

// main()
//   .then(() => console.log("✅ Database seeding completed successfully"))
//   .catch((e) => {
//     console.error("❌ Database seeding failed:", e);
//     if (e instanceof Error) console.error(e.stack);
//     process.exit(1);
//   });


import 'dotenv/config';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function log(msg: string) {
  process.stdout.write(msg + "\n");
}

async function main() {
  log("🔥 Starting database seeding...");
  log("Using DB URL: " + process.env.DATABASE_URL);

  try {
    await prisma.$connect();
    log("✅ Connected to database");

    const regions = await prisma.region.createMany({
      data: [
        { id: "32c9087b-7c53-4d84-8b63-32517cbd17c3", name: "india" },
        { id: "f5a13f6c-8e91-42b8-9c0e-07b4567a98e0", name: "usa" }
      ],
      skipDuplicates: true
    });
    log(`✅ Regions seeded (${regions.count} created)`);

    const regionCount = await prisma.region.count();
    log(`✅ Total regions: ${regionCount}`);

    const allRegions = await prisma.region.findMany();
    log("✅ All regions: " + JSON.stringify(allRegions));

  } catch (err) {
    log("❌ Error seeding database: " + err);
    if (err instanceof Error) log(err.stack || "");
  } finally {
    await prisma.$disconnect();
    log("✅ Database connection closed");
  }
}

(async () => {
  await main();
})();