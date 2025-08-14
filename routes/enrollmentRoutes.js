import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  createEnrollment, getEnrollments, updateEnrollment, deleteEnrollment
} from "../controllers/enrollmentController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createEnrollment);
router.get("/", protect, authorizeRoles("admin", "institute"), getEnrollments);
router.put("/:id", protect, authorizeRoles("admin", "institute"), updateEnrollment);
router.delete("/:id", protect, authorizeRoles("admin"), deleteEnrollment);

export default router;
