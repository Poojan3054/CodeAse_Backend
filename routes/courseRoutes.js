import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  createCourse, getCourses, getCourse, updateCourse, deleteCourse
} from "../controllers/courseController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.put("/:id", protect, authorizeRoles("admin", "institute"), updateCourse);
router.delete("/:id", protect, authorizeRoles("admin"), deleteCourse);

export default router;
