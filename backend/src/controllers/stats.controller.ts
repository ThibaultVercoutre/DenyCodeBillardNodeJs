import * as LanguagesVisitService from '../services/stats.service.js';

export const getLanguageVisit = async (req: any, res: any) => {
    const languageVisit = await LanguagesVisitService.getLanguageVisit();
    return res.status(200).json(languageVisit);
}

export const getNotionVisit = async (req: any, res: any) => {
    const notionVisit = await LanguagesVisitService.getNotionVisit();
    return res.status(200).json(notionVisit);
}

export const getExerciceVisit = async (req: any, res: any) => {
    const exerciceVisit = await LanguagesVisitService.getExerciceVisit();
    return res.status(200).json(exerciceVisit);
}