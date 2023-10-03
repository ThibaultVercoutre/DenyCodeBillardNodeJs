var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as LanguagesVisitService from '../services/stats.service.js';
export const getLanguageVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const languageVisit = yield LanguagesVisitService.getLanguageVisit();
    return res.status(200).json(languageVisit);
});
export const getNotionVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notionVisit = yield LanguagesVisitService.getNotionVisit();
    return res.status(200).json(notionVisit);
});
export const getExerciceVisit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const exerciceVisit = yield LanguagesVisitService.getExerciceVisit();
    return res.status(200).json(exerciceVisit);
});
