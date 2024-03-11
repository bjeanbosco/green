import mongoose from 'mongoose';

const EducationModelSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.EducationModel || mongoose.model('EducationModel', EducationModelSchema);
