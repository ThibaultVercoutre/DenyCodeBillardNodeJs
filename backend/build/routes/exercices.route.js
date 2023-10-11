import express from "express";
import * as ExercicesController from "../controllers/exercices.controller.js";
export const exercicesRouter = express.Router();
exercicesRouter.get("/exercice/:id", ExercicesController.getExercice);
