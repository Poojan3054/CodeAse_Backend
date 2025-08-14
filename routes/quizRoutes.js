import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { createQuiz, getQuizzes, submitQuiz, getResults } from "../controllers/quizController.js";

const router = Router();

router.post("/", protect, authorizeRoles("admin", "institute"), createQuiz);
router.get("/", getQuizzes);
router.post("/submit", protect, authorizeRoles("student", "admin", "institute"), submitQuiz);
router.get("/results", protect, authorizeRoles("admin", "institute"), getResults);

export default router;
