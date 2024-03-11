import mongoose from 'mongoose';

const AdmissionModelSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.AdmissionModel || mongoose.model('AdmissionModel', AdmissionModelSchema);
