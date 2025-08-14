import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createNotification, getNotifications, markRead } from "../controllers/notificationController.js";

const router = Router();

router.post("/", protect, createNotification);
router.get("/", protect, getNotifications);
router.patch("/:id/read", protect, markRead);

export default router;
