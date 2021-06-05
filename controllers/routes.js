import express from "express";
import { questions } from "../questions/questions.js";

export const getQuestions = (req, res) => {
    res.send(questions);
}

