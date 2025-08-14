import Lesson from "../models/Lesson.js";

export const createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getLessons = async (_req, res) => {
  const list = await Lesson.find().populate("moduleId", "title").populate("quizId", "title");
  res.json(list);
};

export const updateLesson = async (req, res) => {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!lesson) return res.status(404).json({ message: "Not found" });
  res.json(lesson);
};

export const deleteLesson = async (req, res) => {
  const lesson = await Lesson.findByIdAndDelete(req.params.id);
  if (!lesson) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
