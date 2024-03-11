import mongoose from 'mongoose';

const AboutUsModelSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.AboutUsModel || mongoose.model('AboutUsModel', AboutUsModelSchema);
