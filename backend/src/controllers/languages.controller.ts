import * as LanguagesService from '../services/languages.service.js';

export const getLanguages = async (req: any, res: any) => {
    const languages = await LanguagesService.getLanguages();
    return res.status(200).json(languages);
}

export const getLanguageByName = async (req: any, res: any) => {
    const languages = await LanguagesService.getLanguageByName(req.params.name);
    return res.status(200).json(languages);
}

export const getNotionsByLanguageName = async (req: any, res: any) => {
    const languages = await LanguagesService.getNotionsByLanguageName(req.params.name);
    return res.status(200).json(languages);
}

export const getExercicesByNotionNameByLanguageName = async (req: any, res: any) => {
    const languages = await LanguagesService.getExercicesByNotionNameByLanguageName(req.params.nameL, req.params.nameN);
    return res.status(200).json(languages);
}