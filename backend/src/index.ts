import * as http from "http";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

import { languagesRouter } from "./routes/languages.route.js";
import { notionsRouter } from "./routes/notions.route.js";
import { usersRouter } from "./routes/users.route.js";
import { languageStatsRouter } from "./routes/stats.route.js";
import { exercicesRouter } from "./routes/exercices.route.js";

dotenv.config();



//EQr4B7b8fLTddXZC

// connexion();

// const db = mysql.createConnection({
//     host: "198.244.220.220",
//     user: process.env.DB_USER,
//     port: 22,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// const db = mysql.createConnection({
//   host: "localhost",
//   user: 'root',
//   password: '',
//   database: 'denycodebillard',
// });

// db.connect((err) => {
//     if (err) {
//       console.error("Erreur de connexion à la base de données MariaDB:" + err.stack);
//       return;
//     }
//     console.log("Connecté à la base de données MariaDB");
// });

// db.query("SELECT * FROM languages", (err, rows, field) => {
//   if(err) throw err;
//   console.log(rows);
// })


const hostname = "127.0.0.1";
const port = 5000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/", languagesRouter);
app.use("/", notionsRouter);
app.use("/", usersRouter);
app.use("/", languageStatsRouter);
app.use("/", exercicesRouter);

app.get("/", async (req, res) => {
  res.send("Hello World!");
  // const languages = await getLanguages();
  // res.send(languages);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});