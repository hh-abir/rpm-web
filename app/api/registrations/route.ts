import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { auth } from "@/lib/auth"; // For Admin check
import { headers } from "next/headers";

// --- PUBLIC ROUTE: Anyone can register ---
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("robu_rpm_db");

        // Validate essential fields
        if (!body.studentId || !body.email || !body.workshopId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const registration = {
            ...body,
            createdAt: new Date(),
            status: "PENDING", // Default status for new public submissions
            reviewedBy: null,
        };

        await db.collection("registrations").insertOne(registration);

        return NextResponse.json({ success: true, message: "Registration submitted successfully." });
    } catch (error) {
        return NextResponse.json({ error: "Database Error" }, { status: 500 });
    }
}

// --- PROTECTED ROUTE: Only Admins can view logs ---
export async function GET(req: Request) {
    try {
        // 1. Verify Session (Admin Check)
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            return NextResponse.json({ error: "Unauthorized: Admin Access Required" }, { status: 401 });
        }

        const client = await clientPromise;
        const db = client.db("robu_rpm_db");

        // 2. Fetch ALL registrations (sorted by newest)
        const registrations = await db
            .collection("registrations")
            .find({})
            .sort({ createdAt: -1 })
            .toArray();

        return NextResponse.json({ registrations });
    } catch (error) {
        return NextResponse.json({ error: "Database Error" }, { status: 500 });
    }
}