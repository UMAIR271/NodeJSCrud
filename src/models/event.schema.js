import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a product name"],
        trim: true,
        maxLength: [1200, "product name should not be max than 1200 chars"]
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    collectionId: {
        type: mongoose.Types.ObjectId,
        ref: "Issue"
    }

},{timestamps:true});

export default mongoose.model("Event", eventSchema);