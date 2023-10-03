import * as UsersService from '../services/users.service.js';

export const getUsers = async (req: any, res: any) => {
    const users = await UsersService.getUsers();
    return res.status(200).json(users);
}

export const getUserByEmailAndPassword = async (req: any, res: any) => {
    const users = await UsersService.getUserByEmailAndPassword(req.params.email, req.params.mdp);
    return res.status(200).json(users);
}

export const getUserByEmail = async (req: any, res: any) => {
    const user = await UsersService.getUserByEmail(req.params.email);
    return res.status(200).json(user);
}

export const getUserByPseudo = async (req: any, res: any) => {
    const user = await UsersService.getUserByPseudo(req.params.pseudo);
    return res.status(200).json(user);
}

export const registerUser = async (req: any, res: any) => {
    try {
      const result = await UsersService.registerUser(req.body);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Une erreur s'est produite lors de l'inscription." });
    }
};

export const getUserLeaderBoard = async (req: any, res: any) => {
    const user = await UsersService.getUserLeaderBoard();
    return res.status(200).json(user);
}