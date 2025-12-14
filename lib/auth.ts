import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import clientPromise from "./db";

// 1. Wait for the client connection
const client = await clientPromise;

// 2. Select the specific database (e.g., "rpm_db")
// If your URI already has a db name, client.db() uses that. 
// Otherwise, it defaults to 'test', so it's safer to name it here.
const db = client.db("robu_rpm_db");

export const auth = betterAuth({
    // 3. Pass the DB instance, not the client
    database: mongodbAdapter(db),

    emailAndPassword: {
        enabled: true,
    },

    user: {
        additionalFields: {
            designation: {
                type: "string",
                required: false,
            },
            studentId: {
                type: "string",
                required: false,
            },
            phoneNumber: {
                type: "string",
                required: false,
            },
            role: {
                type: "string",
                defaultValue: "user",
            }
        },
    },
});