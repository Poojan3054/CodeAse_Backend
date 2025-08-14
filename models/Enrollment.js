import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    universityId: { type: mongoose.Schema.Types.ObjectId, ref: "University", required: true },
    enrollmentDate: { type: Date, default: Date.now },
    status: { type: String, enum: ["active", "completed", "dropped"], default: "active" },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    grades: [
      {
        moduleId: { type: mongoose.Schema.Types.ObjectId, ref: "Module" },
        grade: { type: Number, min: 0, max: 100 }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Enrollment", enrollmentSchema);
