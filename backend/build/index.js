import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
//EQr4B7b8fLTddXZC
const db = mysql.createConnection({
    host: "198.244.220.220",
    user: process.env.DB_USER,
    port: 22,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
db.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données MariaDB:", err);
        throw err;
    }
    console.log("Connecté à la base de données MariaDB");
});
const hostname = "127.0.0.1";
const port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello !");
});
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
