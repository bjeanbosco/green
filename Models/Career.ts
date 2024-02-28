import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    industry: { type: String, required: true },
    jobLevel: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    deadline: { type: Date, required: true },
    selectedOption: { type: String, required: true },
    description: { type: String, required: true },
    selectedFile: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Career || mongoose.model("Career", CareerSchema);
