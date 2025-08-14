import QuizResult from "../models/QuizResult.js";

// Create Quiz Result
export const createQuizResult = async (req, res) => {
  try {
    const { quizId, studentId, score, answers } = req.body;

    const result = await QuizResult.create({
      quizId,
      studentId,
      score,
      answers
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all quiz results
export const getQuizResults = async (req, res) => {
  try {
    const results = await QuizResult.find()
      .populate("quizId", "title")
      .populate("studentId", "fullName email");
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
