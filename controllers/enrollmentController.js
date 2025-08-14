import Enrollment from "../models/Enrollment.js";

export const createEnrollment = async (req, res) => {
  try {
    const enr = await Enrollment.create(req.body);
    res.status(201).json(enr);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getEnrollments = async (_req, res) => {
  const list = await Enrollment.find()
    .populate("studentId", "fullName email")
    .populate("courseId", "title")
    .populate("universityId", "name");
  res.json(list);
};

export const updateEnrollment = async (req, res) => {
  const enr = await Enrollment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!enr) return res.status(404).json({ message: "Not found" });
  res.json(enr);
};

export const deleteEnrollment = async (req, res) => {
  const enr = await Enrollment.findByIdAndDelete(req.params.id);
  if (!enr) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
