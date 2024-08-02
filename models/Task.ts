import mongoose, {Schema} from "mongoose";
import toJSON from "@/models/plugins/toJSON";

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

taskSchema.plugin(toJSON);

export default mongoose.models.Task || mongoose.model("Task", taskSchema);