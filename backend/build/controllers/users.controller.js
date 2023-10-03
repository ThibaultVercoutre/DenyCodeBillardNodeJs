var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as UsersService from '../services/users.service.js';
export const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UsersService.getUsers();
    return res.status(200).json(users);
});
export const getUserByEmailAndPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UsersService.getUserByEmailAndPassword(req.params.email, req.params.mdp);
    return res.status(200).json(users);
});
export const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UsersService.getUserByEmail(req.params.email);
    return res.status(200).json(user);
});
export const getUserByPseudo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UsersService.getUserByPseudo(req.params.pseudo);
    return res.status(200).json(user);
});
export const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield UsersService.registerUser(req.body);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Une erreur s'est produite lors de l'inscription." });
    }
});
export const getUserLeaderBoard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UsersService.getUserLeaderBoard();
    return res.status(200).json(user);
});
