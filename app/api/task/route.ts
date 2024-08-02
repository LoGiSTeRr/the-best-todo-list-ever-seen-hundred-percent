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
        await Task.create({name: body.name, description: body.description, priority: body.priority, status: body.status});
        return NextResponse.json({});
    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}

export async function DELETE(req: NextRequest) {
    const body = await req.json();
    try {
        await Task.findByIdAndDelete(body._id);
        return NextResponse.json({});
    } catch(e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}


export async function PUT(req: NextRequest) {
    await connectMongoDB();
    const body = await req.json();

    if (!body._id) {
        return NextResponse.json({error: "ID is required"}, {status: 400});
    }

    try {
        const task = await Task.findById(body._id);
        if (!task) {
            return NextResponse.json({error: "Task not found"}, {status: 404});
        }

        if (body.name) task.name = body.name;
        if (body.description) task.description = body.description;
        if (body.priority) task.priority = body.priority;
        if (body.status) task.status = body.status;

        await task.save();
        return NextResponse.json({});

    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}


export async function GET(req: NextRequest) {
    await connectMongoDB();

    try {
        const tasks = await Task.find({});
        return NextResponse.json({data: tasks});
    } catch (e) {
        console.error(e);
        return NextResponse.json({error: e}, {status: 500});
    }
}