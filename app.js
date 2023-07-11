require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes");
const db = require("./models");

const ThreadController = require("./controllers/thread-controller");
const dataThreads = require("./utils/thread");
const { Threads } = require("./models/thread");
const { PotentielThread } = require("./models/potentiel-thread");
const { FarmThread } = require("./models/farm-thread");
const Categorie = require("./models/categories");
const app = express();

db.start();
app.listen(3000, () => console.log("Server started on port 3000"));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", route);

// const test = new Threads({
//   title: "Campagne Partie 2 des 8 ans",
//   img: "./images/F0bRh17WIAAvV_Q.jpeg",
//   link: "https://twitter.com/Ambre_thr/status/1677268637877411840",
// });

// test.save()

// try {
//   dataThreads.threads.map((t) => {
//     console.log("t", t);
//     Threads.create(t);
//   });
//   dataThreads.potentielThreads.map((t) => {
//     PotentielThread.create(t);
//   });
//   dataThreads.farmThread.map((t) => {
//     FarmThread.create(t);
//   });
// } catch (error) {
//   console.log(error);
// }
