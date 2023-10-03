import express from "express";
import * as NotionsController from "../controllers/notions.controller.js";
export const notionsRouter = express.Router();
notionsRouter.get("/notions", NotionsController.getNotions);
notionsRouter.get("/notion/:name", NotionsController.getNotionByName);
notionsRouter.get("/notion/:name/languages", NotionsController.getLanguagesByNotionName);
notionsRouter.get("/notion/:nameN/language/:nameL", NotionsController.getExercicesByLanguageNameByNotionName);
