import mongoose from 'mongoose';

const PrimarySchoolModelSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.PrimarySchoolModel || mongoose.model('PrimarySchoolModel', PrimarySchoolModelSchema);
