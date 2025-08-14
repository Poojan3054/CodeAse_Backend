import Quiz from "../models/Quiz.js";
import QuizResult from "../models/QuizResult.js";

export const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getQuizzes = async (_req, res) => {
  const list = await Quiz.find();
  res.json(list);
};

export const submitQuiz = async (req, res) => {
  try {
    const result = await QuizResult.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getResults = async (_req, res) => {
  const list = await QuizResult.find().populate("quizId", "title").populate("studentId", "fullName email");
  res.json(list);
};
