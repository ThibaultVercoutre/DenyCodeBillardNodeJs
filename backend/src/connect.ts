import mysql from "mysql2";

export const connexion = async () => {
    const db = mysql.createConnection({
        host: "localhost",
        user: 'root',
        password: '',
        database: 'denycodebillard',
    });

    return db;
};