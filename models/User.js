import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, enum: ["admin", "student", "institute"], required: true },
    profileImage: { type: String },
    status: { type: String, enum: ["active", "inactive", "pending"], default: "active" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
