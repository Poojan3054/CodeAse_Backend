import University from "../models/University.js";

export const createUniversity = async (req, res) => {
  try {
    const uni = await University.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(uni);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUniversities = async (_req, res) => {
  const list = await University.find().populate("createdBy", "fullName email role");
  res.json(list);
};

export const getUniversity = async (req, res) => {
  const uni = await University.findById(req.params.id);
  if (!uni) return res.status(404).json({ message: "Not found" });
  res.json(uni);
};

export const updateUniversity = async (req, res) => {
  const uni = await University.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!uni) return res.status(404).json({ message: "Not found" });
  res.json(uni);
};

export const deleteUniversity = async (req, res) => {
  const uni = await University.findByIdAndDelete(req.params.id);
  if (!uni) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
