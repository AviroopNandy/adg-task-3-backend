import express from "express";
import { getQuestions } from "../controllers/routes.js";

const router = express.Router();

router.get("/", getQuestions);

export default router;