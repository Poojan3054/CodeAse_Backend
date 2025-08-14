import Module from "../models/Module.js";

export const createModule = async (req, res) => {
  try {
    const mod = await Module.create(req.body);
    res.status(201).json(mod);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getModules = async (_req, res) => {
  const list = await Module.find().populate("courseId", "title");
  res.json(list);
};

export const updateModule = async (req, res) => {
  const mod = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!mod) return res.status(404).json({ message: "Not found" });
  res.json(mod);
};

export const deleteModule = async (req, res) => {
  const mod = await Module.findByIdAndDelete(req.params.id);
  if (!mod) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
};
