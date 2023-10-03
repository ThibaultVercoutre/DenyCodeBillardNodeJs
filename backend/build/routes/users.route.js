import express from "express";
import * as UsersController from "../controllers/users.controller.js";
export const usersRouter = express.Router();
usersRouter.get("/users", UsersController.getUsers);
usersRouter.get("/user/:email/:mdp", UsersController.getUserByEmailAndPassword);
usersRouter.get("/userbyemail/:email", UsersController.getUserByEmail);
usersRouter.get("/userbypseudo/:pseudo", UsersController.getUserByPseudo);
usersRouter.post("/register", UsersController.registerUser);
usersRouter.get("/usersleaderboard", UsersController.getUserLeaderBoard);
