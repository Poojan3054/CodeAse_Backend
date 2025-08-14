import Announcement from "../models/Announcement.js";

export const createAnnouncement = async (req, res) => {
  try {
    const a = await Announcement.create({ ...req.body, createdBy: req.user._id });
    res.status(201).json(a);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAnnouncements = async (_req, res) => {
  const list = await Announcement.find().populate("createdBy", "fullName role");
  res.json(list);
};
