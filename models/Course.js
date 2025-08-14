import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    universityId: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    title: { type: String, required: true, trim: true },
    code: { type: String, trim: true },
    description: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., "3 Years"
    level: { type: String, enum: ["Undergraduate", "Postgraduate"], required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
