import { createClient } from "redis";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

async function seed() {
  console.log(`Connecting to Redis at ${REDIS_URL}...`);
  
  const client = createClient({ url: REDIS_URL });
  
  try {
    await client.connect();
    console.log("✅ Connected to Redis");

    // 1. Create the stream explicitly by adding an initial event
    const streamKey = "betteruptime:website";
    const initialId = await client.xAdd(streamKey, "*", {
      event: "init",
      message: "Stream created for betteruptime",
    });
    console.log(`✅ Stream '${streamKey}' created with initial id ${initialId}`);

    // 2. Create consumer groups
    try {
      await client.xGroupCreate(streamKey, "f5a13f6c-8e91-42b8-9c0e-07b4567a98e0", "$", { MKSTREAM: true });
      console.log("✅ Created consumer group f5a13f6c-8e91-42b8-9c0e-07b4567a98e0");
    } catch (e: any) {
      if (e.message.includes('BUSYGROUP')) {
        console.log("ℹ️ Consumer group f5a13f6c-8e91-42b8-9c0e-07b4567a98e0 already exists");
      } else {
        console.log("⚠️ Error creating consumer group f5a13f6c-8e91-42b8-9c0e-07b4567a98e0:", e.message);
      }
    }

    try {
      await client.xGroupCreate(streamKey, "32c9087b-7c53-4d84-8b63-32517cbd17c3", "$", { MKSTREAM: true });
      console.log("✅ Created consumer group 32c9087b-7c53-4d84-8b63-32517cbd17c3");
    } catch (e: any) {
      if (e.message.includes('BUSYGROUP')) {
        console.log("ℹ️ Consumer group 32c9087b-7c53-4d84-8b63-32517cbd17c3 already exists");
      } else {
        console.log("⚠️ Error creating consumer group 32c9087b-7c53-4d84-8b63-32517cbd17c3:", e.message);
      }
    }

    console.log("✅ Redis Groups Created Successfully");
  } catch (error) {
    console.error("❌ Error seeding redis:", error);
    throw error;
  } finally {
    await client.quit();
    console.log("✅ Redis connection closed");
  }
}

seed().catch((err) => {
  console.error("❌ Error seeding redis:", err);
  process.exit(1);
});