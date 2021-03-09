import mongoose from "mongoose";

// Schema
const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required",
    },
    title: {
        type: String,
        required: "Title is required",
    },
    description: String,
    views: {
        type: Number,
        default: 0,
    },
    createrdAt: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

// Model
const model = mongoose.model("Video", VideoSchema);
export default model;
