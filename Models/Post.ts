import mongoose from "mongoose";

const postSchema = new mongoose.Schema({}, { timestamps: true });

export default mongoose.models.Post || mongoose.model("Post", postSchema);
