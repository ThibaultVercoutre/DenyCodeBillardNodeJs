import mysql from "mysql2";

import { connexion } from "../connect.js";
import { Language, ILanguage } from "../models/languages.model.js";

async function connect(db: mysql.Connection) {
    await new Promise<void>((resolve, reject) => {
        db.connect((err) => {
            if (err) {
                console.error("Erreur de connexion à la base de données MariaDB:" + err.stack);
                reject(err);
            } else {
                console.log("Connecté à la base de données MariaDB");
                resolve();
            }
        });
    });
}

export const getLanguages = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM languages", (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const languages = rows.map((language: any) => {
            return new Language(language);
        });

        return languages;
    } catch (error) {
        throw error;
    }
}

export const getLanguageByName = async (language: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM languages WHERE name = ?", [language], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const languages = rows.map((language: any) => {
            return new Language(language);
        });

        return languages;
    } catch (error) {
        throw error;
    }
}

export const getNotionsByLanguageName = async (language: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT * FROM `notions` WHERE id IN ( SELECT notion FROM exercices WHERE language IN ( SELECT id FROM languages WHERE name = ?))"
            db.query(sql, [language], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const languages = rows.map((language: any) => {
            return new Language(language);
        });

        return languages;
    } catch (error) {
        throw error;
    }
}

export const getExercicesByNotionNameByLanguageName = async (language: string, notion: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT * FROM `exercices` WHERE language IN ( SELECT id FROM languages WHERE name = ? ) AND notion IN ( SELECT id FROM notions WHERE name = ? )"
            db.query(sql, [language, notion], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const languages = rows.map((language: any) => {
            return new Language(language);
        });

        return languages;
    } catch (error) {
        throw error;
    }
}