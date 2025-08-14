import Course from "../models/Course.js";

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCourses = async (_req, res) => {
  const list = await Course.find().populate("universityId", "name code location");
  res.json(list);
};

export const getCourse = async (req, res) => {
  const item = await Course.findById(req.params.id).populate("universityId", "name code location");
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

export const updateCourse = async (req, res) => {
  const item = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

export const deleteCourse = async (req, res) => {
  const item = await Course.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
