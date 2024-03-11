import mongoose from 'mongoose';

const BoardingModelSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    content: { type: mongoose.Schema.Types.Mixed, require: true },
  },
  { timestamps: true }
);

export default mongoose.models.BoardingModel || mongoose.model('BoardingModel', BoardingModelSchema);
