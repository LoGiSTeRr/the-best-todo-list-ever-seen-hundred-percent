import mongoose, {Schema} from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    priority: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});