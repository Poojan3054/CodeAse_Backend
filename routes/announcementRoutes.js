import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { createAnnouncement, getAnnouncements } from "../controllers/announcementController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createAnnouncement);
router.get("/", protect, getAnnouncements);

export default router;
