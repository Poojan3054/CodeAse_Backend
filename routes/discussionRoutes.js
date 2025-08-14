import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createDiscussion, getDiscussions } from "../controllers/discussionController.js";

const router = Router();

router.post("/", protect, createDiscussion);
router.get("/", protect, getDiscussions);

export default router;
