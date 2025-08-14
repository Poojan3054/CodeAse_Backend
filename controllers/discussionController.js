import Discussion from "../models/Discussion.js";

export const createDiscussion = async (req, res) => {
  try {
    const d = await Discussion.create({ ...req.body, postedBy: req.user._id });
    res.status(201).json(d);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getDiscussions = async (_req, res) => {
  const list = await Discussion.find()
    .populate("postedBy", "fullName")
    .populate("courseId", "title");
  res.json(list);
};
