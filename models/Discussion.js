import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
  {
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    question: { type: String, required: true },
    answers: [
      {
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        answer: { type: String },
        date: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Discussion", discussionSchema);
