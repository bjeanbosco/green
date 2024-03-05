import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    slug: { type: String, default: "figma manager" },
    jobTitle: { type: String, required: true },
    industry: { type: String, required: true },
    jobLevel: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    deadline: { type: Date, required: true },
    isPublished: { type: Boolean, default: false },
    publishDate: { type: String, default: "31/10/2023" },
    selectedOption: { type: String, required: true },
    posted: { type: String, default: "Posted 12 months ago" },
    description: { type: String, required: true },
    selectedFile: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Career || mongoose.model("Career", CareerSchema);
