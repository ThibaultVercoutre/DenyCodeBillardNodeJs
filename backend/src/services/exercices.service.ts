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
            db.query("SELECT * FROM exercices WHERE id = ?", [id], (err, rows: any[], field) => {
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