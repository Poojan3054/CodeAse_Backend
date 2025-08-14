import Notification from "../models/Notification.js";

export const sendNotification = async (userId, message, type = "info") => {
  return Notification.create({ userId, message, type });
};
