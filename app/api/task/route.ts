import {NextRequest, NextResponse} from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";

export async function POST(req: NextRequest) {
    await connectMongoDB();
    const body = await req.json();

    if (!body.name) {
        return NextResponse.json({error: "Name is required"}, {status: 400});
    }
    try {
        const data = await Task.create({name: body.name, description: body.description, priority: body.priority, status: body.status});
        return NextResponse.json({data});
    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}

export async function GET(req: NextRequest) {
    await connectMongoDB();

    try {
        const data = await Task.find({});
        return NextResponse.json({data});
    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}