import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
    title: { type: String, required: true, trim: true },
    content: { type: String }, // HTML/Markdown
    videoUrl: { type: String },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
