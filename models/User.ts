import mongoose, {Schema} from "mongoose";

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
    }
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

userSchema.plugin(mongoose);