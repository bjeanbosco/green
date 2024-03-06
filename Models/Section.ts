// models/Section.ts
import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true , unique:true},
    content: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

export default mongoose.models.Section || mongoose.model('Section', sectionSchema);
