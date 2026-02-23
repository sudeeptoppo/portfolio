// lib/prisma.js
// IMPORT IMPORTANCE: Point to 'client', not 'index.js'

import { PrismaClient } from "./generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient({} as any);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// add a test function to ensure a connection and db creation
async function testDbConnection() {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database and it exists.");
  } catch (error) {
    console.error(
      "Failed to connect to the database or it doesn't exist. Please check your MongoDB server and connection string.",
      error,
    );
  }
}
testDbConnection();
