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

export async function DELETE(req: NextRequest) {
    await connectMongoDB();
    const body = await req.json();
    try {
        await Task.findByIdAndDelete(body.id);
        return NextResponse.json({});
    } catch(e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}

export async function PUT(req: NextRequest) {
    await connectMongoDB();
    const body = await req.json();

    if (!body.id) {
        return NextResponse.json({error: "ID is required"}, {status: 400});
    }

    try {
        const data = await Task.findById(body.id);
        if (!data) {
            return NextResponse.json({error: "Task not found"}, {status: 404});
        }

        if (body.data.name) data.name = body.data.name;
        if (body.data.description) data.description = body.data.description;
        if (body.data.priority) data.priority = body.data.priority;
        if (body.data.status) data.status = body.data.status;

        await data.save();
        return NextResponse.json({data});

    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}