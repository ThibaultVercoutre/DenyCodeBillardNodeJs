var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as NotionsService from '../services/notions.service.js';
export const getNotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notions = yield NotionsService.getNotions();
    return res.status(200).json(notions);
});
export const getNotionByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notions = yield NotionsService.getNotionByName(req.params.name);
    return res.status(200).json(notions);
});
export const getLanguagesByNotionName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notions = yield NotionsService.getLanguagesByNotionName(req.params.name);
    return res.status(200).json(notions);
});
export const getExercicesByLanguageNameByNotionName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notions = yield NotionsService.getExercicesByLanguageNameByNotionName(req.params.nameN, req.params.nameL);
    return res.status(200).json(notions);
});
