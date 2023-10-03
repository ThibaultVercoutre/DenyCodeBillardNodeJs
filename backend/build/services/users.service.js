var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
import { connexion } from "../connect.js";
import { User } from "../models/users.model.js";
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
export const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM users", (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const users = rows.map((user) => {
            return new User(user);
        });
        return users;
    }
    catch (error) {
        throw error;
    }
});
export const getUserByEmailAndPassword = (email, mdp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ? ", [email], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        if (rows.length > 0) {
            const passwordMatch = yield bcrypt.compare(mdp, rows[0].password);
            if (passwordMatch) {
                const userWithoutPassword = Object.assign(Object.assign({}, rows[0]), { password: undefined });
                return new User(userWithoutPassword);
            }
            else {
                // Mot de passe incorrect
                return { error: "Mot de passe incorrect" };
            }
        }
        else {
            // Email incorrect
            return { error: "Email incorrect" };
        }
    }
    catch (error) {
        throw error;
    }
});
export const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE email = ? ", [email], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const user = rows.map((user) => {
            return new User(user);
        });
        return user;
    }
    catch (error) {
        throw error;
    }
});
export const getUserByPseudo = (pseudo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE pseudo = ? ", [pseudo], (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const user = rows.map((user) => {
            return new User(user);
        });
        return user;
    }
    catch (error) {
        throw error;
    }
});
export const registerUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        // Hash du mot de passe avant de l'enregistrer
        const hashedPassword = yield bcrypt.hash(userData.password, 10);
        const result = yield new Promise((resolve, reject) => {
            db.query("INSERT INTO users (email, password, name, firstname, pseudo, birthday, is_verified, verification_token) VALUES (?, ?, ?, ?, ?, ?, 1, 0)", [userData.email, hashedPassword, userData.name, userData.firstname, userData.pseudo, userData.birthday], (err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
        db.end();
        return result;
    }
    catch (error) {
        throw error;
    }
});
export const getUserLeaderBoard = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connexion();
        yield connect(db);
        const rows = yield new Promise((resolve, reject) => {
            db.query("SELECT pseudo, xp FROM users WHERE admin = 0 ORDER BY xp DESC", (err, rows, field) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(rows);
                }
            });
        });
        db.end();
        const user = rows.map((user) => {
            return new User(user);
        });
        return user;
    }
    catch (error) {
        throw error;
    }
});
