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
import { Notion } from "../models/notions.model.js";
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
export const getNotions = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM notions", (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const notions = rows.map((notion) => {
            return new Notion(notion);
        });
        return notions;
    }
    catch (error) {
        throw error;
    }
});
export const getNotionByName = (notion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM notions WHERE name = ?", [notion], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const notions = rows.map((notion) => {
            return new Notion(notion);
        });
        return notions;
    }
    catch (error) {
        throw error;
    }
});
export const getLanguagesByNotionName = (notion) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT * FROM `languages` WHERE id IN ( SELECT language FROM exercices WHERE notion IN ( SELECT id FROM notions WHERE name = ?))";
            db.query(sql, [notion], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const notions = rows.map((notion) => {
            return new Notion(notion);
        });
        return notions;
    }
    catch (error) {
        throw error;
    }
});
export const getExercicesByLanguageNameByNotionName = (notion, language) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            const sql = "SELECT * FROM `exercices` WHERE notion IN ( SELECT id FROM notions WHERE name = ? ) AND language IN ( SELECT id FROM languages WHERE name = ? )";
            db.query(sql, [notion, language], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const notions = rows.map((notion) => {
            return new Notion(notion);
        });
        return notions;
    }
    catch (error) {
        throw error;
    }
});
