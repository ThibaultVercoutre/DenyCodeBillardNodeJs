import * as NotionsService from '../services/notions.service.js';

export const getNotions = async (req: any, res: any) => {
    const notions = await NotionsService.getNotions();
    return res.status(200).json(notions);
}

export const getNotionByName = async (req: any, res: any) => {
    const notions = await NotionsService.getNotionByName(req.params.name);
    return res.status(200).json(notions);
}

export const getLanguagesByNotionName = async (req: any, res: any) => {
    const notions = await NotionsService.getLanguagesByNotionName(req.params.name);
    return res.status(200).json(notions);
}

export const getExercicesByLanguageNameByNotionName = async (req: any, res: any) => {
    const notions = await NotionsService.getExercicesByLanguageNameByNotionName(req.params.nameN, req.params.nameL);
    return res.status(200).json(notions);
}