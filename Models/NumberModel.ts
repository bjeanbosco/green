// models/NumberModel.ts

import mongoose from 'mongoose';

const NumberSchema = new mongoose.Schema(
    {
        sectionSlug: { type: String, required: true },
        title: { type: String, required: true },
        number: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Numbers || mongoose.model('Numbers', NumberSchema);
