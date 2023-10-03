import mysql from "mysql2";

import { connexion } from "../connect.js";
import { LanguageVisit, ILanguageVisit } from "../models/stats.model.js";

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

export const getLanguageVisit = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT languages.name AS name, SUM(exercices.nb_visit) AS nb_visit_total, SUM(exercices.nb_visit_month) AS nb_visit_month_total FROM exercices INNER JOIN languages ON exercices.language = languages.id GROUP BY languages.name;"
            db.query(sql, (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        return rows;
    } catch (error) {
        throw error;
    }
}

export const getNotionVisit = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT notions.name AS name, SUM(exercices.nb_visit) AS nb_visit_total, SUM(exercices.nb_visit_month) AS nb_visit_month_total FROM exercices INNER JOIN notions ON exercices.notion = notions.id GROUP BY notions.name;"
            db.query(sql, (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        return rows;
    } catch (error) {
        throw error;
    }
}

export const getExerciceVisit = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT name AS name, nb_visit AS nb_visit_total, nb_visit_month AS nb_visit_month_total FROM exercices"
            db.query(sql, (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        return rows;
    } catch (error) {
        throw error;
    }
}