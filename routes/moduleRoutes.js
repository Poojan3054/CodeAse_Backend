import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { createModule, getModules, updateModule, deleteModule } from "../controllers/moduleController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createModule);
router.get("/", getModules);
router.put("/:id", protect, authorizeRoles("admin", "institute"), updateModule);
router.delete("/:id", protect, authorizeRoles("admin"), deleteModule);

export default router;
