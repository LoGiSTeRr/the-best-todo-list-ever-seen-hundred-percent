import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "@/libs/mongodb";

export async function POST(req: NextRequest) {
    await connectMongoDB();

    const body = await req.json();

    if (!body.name) {
        return NextResponse.json({error: "Name is required"}, {status: 400});
    }

    try {

    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}