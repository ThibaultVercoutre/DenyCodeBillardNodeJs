import express from "express";
import * as LanguagesController from "../controllers/languages.controller.js";

export const languagesRouter = express.Router();

languagesRouter.get("/languages", LanguagesController.getLanguages);

languagesRouter.get("/language/:name", LanguagesController.getLanguageByName);

languagesRouter.get("/language/:name/notions", LanguagesController.getNotionsByLanguageName);

languagesRouter.get("/language/:nameL/notion/:nameN", LanguagesController.getExercicesByNotionNameByLanguageName);