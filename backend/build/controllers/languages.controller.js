var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as LanguagesService from '../services/languages.service.js';
export const getLanguages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield LanguagesService.getLanguages();
    return res.status(200).json(languages);
});
export const getLanguageByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield LanguagesService.getLanguageByName(req.params.name);
    return res.status(200).json(languages);
});
export const getNotionsByLanguageName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield LanguagesService.getNotionsByLanguageName(req.params.name);
    return res.status(200).json(languages);
});
export const getExercicesByNotionNameByLanguageName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield LanguagesService.getExercicesByNotionNameByLanguageName(req.params.nameL, req.params.nameN);
    return res.status(200).json(languages);
});
