// models/Staff.ts

import mongoose from 'mongoose';

const socialMediaSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.SocialMedia || mongoose.model('SocialMedia', socialMediaSchema);
