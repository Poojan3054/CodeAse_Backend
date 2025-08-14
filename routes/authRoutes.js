import { Router } from "express";
import { login, register, updateUserRole } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

// Registration & Login
router.post("/register", register);
router.post("/login", login);

// Update role (admin only)
router.put("/:id/role", protect, updateUserRole);

export default router;
