import mysql from "mysql2";
import bcrypt from "bcrypt";

import { connexion } from "../connect.js";
import { User, IUser } from "../models/users.model.js";

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

export const getUsers = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM users", (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const users = rows.map((user: any) => {
            return new User(user);
        });

        return users;
    } catch (error) {
        throw error;
    }
}

export const getUserByEmailAndPassword = async (email: string, mdp: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ? ", [email], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        if (rows.length > 0) {
            const passwordMatch = await bcrypt.compare(mdp, rows[0].password);
            if (passwordMatch) {
                const userWithoutPassword = { ...rows[0], password: undefined };
                return new User(userWithoutPassword);
            } else {
                // Mot de passe incorrect
               return { error: "Mot de passe incorrect" };
            }
        } else {
            // Email incorrect
            return { error: "Email incorrect" };
        }

    } catch (error) {
        throw error;
    }
}

export const getUserByEmail = async (email: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ? ", [email], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const user = rows.map((user: any) => {
            return new User(user);
        });

        return user;

    } catch (error) {
        throw error;
    }
}

export const getUserByPseudo = async (pseudo: string) => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT * FROM users WHERE pseudo = ? ", [pseudo], (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const user = rows.map((user: any) => {
            return new User(user);
        });

        return user;

    } catch (error) {
        throw error;
    }
}

export const registerUser = async (userData: any) => {
    try {
        const db = await connexion();
        await connect(db);

      // Hash du mot de passe avant de l'enregistrer
      const hashedPassword = await bcrypt.hash(userData.password, 10);
  
      const result = await new Promise<any>((resolve, reject) => {
        db.query(
          "INSERT INTO users (email, password, name, firstname, pseudo, birthday, is_verified, verification_token) VALUES (?, ?, ?, ?, ?, ?, 1, 0)",
          [userData.email, hashedPassword, userData.name, userData.firstname, userData.pseudo, userData.birthday],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
  
      db.end();
  
      return result;
    } catch (error) {
      throw error;
    }
};

export const getUserLeaderBoard = async () => {
    try {
        const db = await connexion();

        await connect(db);

        const rows = await new Promise<any[]>((resolve, reject) => {
            db.query("SELECT pseudo, xp FROM users WHERE admin = 0 ORDER BY xp DESC", (err, rows: any[], field) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        db.end();

        const user = rows.map((user: any) => {
            return new User(user);
        });

        return user;

    } catch (error) {
        throw error;
    }
}