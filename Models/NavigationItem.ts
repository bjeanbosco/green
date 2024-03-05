// models/Staff.ts

import mongoose from 'mongoose';

const navigationItemSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    url: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.NavigationItem || mongoose.model('NavigationItem', navigationItemSchema);
