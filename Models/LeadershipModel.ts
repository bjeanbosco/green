// models/Leadership.ts

import mongoose from 'mongoose';

const LeadershipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    imageUrl: { type: String},
    category: { type: String},
  },
  { timestamps: true }
);

export default mongoose.models.Leadership || mongoose.model('Leadership', LeadershipSchema);
