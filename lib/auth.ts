import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import  prisma  from "./db"; // Import the Prisma client instance

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb", // Change this to mongodb
    }),
    advanced: {
        database: {
            generateId: false, // Vital for MongoDB + Prisma compatibility
        },
    },
});