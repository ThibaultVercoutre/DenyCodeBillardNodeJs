import mysql from "mysql2";
import bcrypt from "bcrypt";

import { connexion } from "../connect.js";
import { Exercice, IExercice } from "../models/exercices.model.js";

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

export const getExercice = async (id: number) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            const sql = "SELECT exercices.id as id, languages.name as language, notions.name as notion, exercices.name as name, nb_visit, nb_visit_month, nb_xp, enonce FROM exercices JOIN notions ON exercices.notion = notions.id JOIN languages ON exercices.language = languages.id WHERE exercices.id = ?"
            db.query(sql, [id], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const exercices = rows.map((exercices: any) => {
            return new Exercice(exercices);
        });

        return exercices;
    } catch (error) {
        throw error;
    }
}