import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    questions: [
      {
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        answerIndex: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
