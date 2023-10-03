import express from "express";
import * as LanguageVisitController from "../controllers/stats.controller.js";
export const languageStatsRouter = express.Router();
languageStatsRouter.get("/stats/languages", LanguageVisitController.getLanguageVisit);
languageStatsRouter.get("/stats/notions", LanguageVisitController.getNotionVisit);
languageStatsRouter.get("/stats/exercices", LanguageVisitController.getExerciceVisit);
