import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { createLesson, getLessons, updateLesson, deleteLesson } from "../controllers/lessonController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createLesson);
router.get("/", getLessons);
router.put("/:id", protect, authorizeRoles("admin", "institute"), updateLesson);
router.delete("/:id", protect, authorizeRoles("admin"), deleteLesson);

export default router;
