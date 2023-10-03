import mysql from "mysql2";

import { connexion } from "../connect.js";
import { Notion, INotion } from "../models/notions.model.js";

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

export const getNotions = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM notions", (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const notions = rows.map((notion: any) => {
            return new Notion(notion);
        });

        return notions;
    } catch (error) {
        throw error;
    }
}

export const getNotionByName = async (notion: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM notions WHERE name = ?", [notion], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const notions = rows.map((notion: any) => {
            return new Notion(notion);
        });

        return notions;
    } catch (error) {
        throw error;
    }
}

export const getLanguagesByNotionName = async (notion: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT * FROM `languages` WHERE id IN ( SELECT language FROM exercices WHERE notion IN ( SELECT id FROM notions WHERE name = ?))"
            db.query(sql, [notion], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const notions = rows.map((notion: any) => {
            return new Notion(notion);
        });

        return notions;
    } catch (error) {
        throw error;
    }
}

export const getExercicesByLanguageNameByNotionName = async (notion: string, language: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT * FROM `exercices` WHERE notion IN ( SELECT id FROM notions WHERE name = ? ) AND language IN ( SELECT id FROM languages WHERE name = ? )"
            db.query(sql, [notion, language], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const notions = rows.map((notion: any) => {
            return new Notion(notion);
        });

        return notions;
    } catch (error) {
        throw error;
    }
}