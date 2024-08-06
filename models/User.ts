import mongoose, {Schema} from "mongoose";
import toJSON from "./plugins/toJSON";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        private: true
    },
    image: {
        type: String,
        trim: true,
    },
    hasAccess:{
        type: String,
        default: false
    }
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

userSchema.plugin(toJSON);

export default mongoose.models.User || mongoose.model("User", userSchema);
