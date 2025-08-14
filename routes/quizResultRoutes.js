import express from "express";
import { createQuizResult, getQuizResults } from "../controllers/quizResultController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createQuizResult);
router.get("/", protect, getQuizResults);

export default router;
