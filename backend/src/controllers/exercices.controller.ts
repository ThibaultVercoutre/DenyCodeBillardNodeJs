import * as ExercicesService from '../services/exercices.service.js';

export const getExercice = async (req: any, res: any) => {
    const users = await ExercicesService.getExercice(req.params.id);
    return res.status(200).json(users);
}
