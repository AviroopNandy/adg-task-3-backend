import express from "express";
import { questions } from "../questions/questions.js";

const router = express.Router();

export const getQuestions = (req, res) => {
    res.send(questions);
}

export default router;