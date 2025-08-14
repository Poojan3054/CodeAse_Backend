import Notification from "../models/Notification.js";

export const createNotification = async (req, res) => {
  try {
    const n = await Notification.create(req.body);
    res.status(201).json(n);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getNotifications = async (req, res) => {
  const list = await Notification.find({ userId: req.user._id });
  res.json(list);
};

export const markRead = async (req, res) => {
  const n = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  if (!n) return res.status(404).json({ message: "Not found" });
  res.json(n);
};
