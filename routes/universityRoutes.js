import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import {
  createUniversity,
  getUniversities,
  getUniversity,
  updateUniversity,
  deleteUniversity
} from "../controllers/universityController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin"), createUniversity);
router.get("/", getUniversities);
router.get("/:id", getUniversity);
router.put("/:id", protect, authorizeRoles("admin"), updateUniversity);
router.delete("/:id", protect, authorizeRoles("admin"), deleteUniversity);

export default router;
