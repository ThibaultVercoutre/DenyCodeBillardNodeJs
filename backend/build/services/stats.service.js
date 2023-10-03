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
export const getLanguageVisit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT languages.name AS name, SUM(exercices.nb_visit) AS nb_visit_total, SUM(exercices.nb_visit_month) AS nb_visit_month_total FROM exercices INNER JOIN languages ON exercices.language = languages.id GROUP BY languages.name;";
            db.query(sql, (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        return rows;
    }
    catch (error) {
        throw error;
    }
});
export const getNotionVisit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT notions.name AS name, SUM(exercices.nb_visit) AS nb_visit_total, SUM(exercices.nb_visit_month) AS nb_visit_month_total FROM exercices INNER JOIN notions ON exercices.notion = notions.id GROUP BY notions.name;";
            db.query(sql, (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        return rows;
    }
    catch (error) {
        throw error;
    }
});
export const getExerciceVisit = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT name AS name, nb_visit AS nb_visit_total, nb_visit_month AS nb_visit_month_total FROM exercices";
            db.query(sql, (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        return rows;
    }
    catch (error) {
        throw error;
    }
});
