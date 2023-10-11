var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { connexion } from "../connect.js";
import { Exercice } from "../models/exercices.model.js";
function connect(db) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve, reject) => {
            db.connect((err) => {
                if (err) {
                    console.error("Erreur de connexion à la base de données MariaDB:" + err.stack);
                    reject(err);
                }
                else {
                    console.log("Connecté à la base de données MariaDB");
                    resolve();
                }
            });
        });
    });
}
export const getExercice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT exercices.id as id, languages.name as language, notions.name as notion, exercices.name as name, nb_visit, nb_visit_month, nb_xp, enonce FROM exercices JOIN notions ON exercices.notion = notions.id JOIN languages ON exercices.language = languages.id WHERE exercices.id = ?";
            db.query(sql, [id], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const exercices = rows.map((exercices) => {
            return new Exercice(exercices);
        });
        return exercices;
    }
    catch (error) {
        throw error;
    }
});
