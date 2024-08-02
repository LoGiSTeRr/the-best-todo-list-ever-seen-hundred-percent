import mongoose from "mongoose";

const connectMongoDB = async () => {
    if (!process.env.MONGODB_URL) {
        throw new Error("MongoDB URI is required");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL)
            .catch((e) => console.error("Mongoose Client Error: " + e.message));
        console.log("connected to MongoDB")
    }
    catch(err) {
        console.error("error: ", err)
    }
}

export default connectMongoDB;