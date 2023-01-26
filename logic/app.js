const express = require("express");
const { Client } = require("pg");
const fs = require("fs");
const { Sequelize } = require('sequelize');

const app = express();
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "JustDorddd1",
  database: "TicTacToe",
});

client
  .connect()
  .then(() => console.log("Connected to db"))
  //.then(() => client.query('SELECT * FROM "WinningHistory"'))
  .then(() =>
    client.query('insert into "History" values ($1, $2)', [
      "X",
      new Date(),
    ])
  )
  .then((res) => console.log("succeed"))
  .catch((e) => console.log(e));
/*
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req, res) => {
  // const data = fs.readFileSync("./logic/history.json");
  //const history = JSON.parse(data);
  let data = null;
  client.query('SELECT * FROM "WinningHistory"').then((rows) => {
    data = rows;
  });
  console.log(data);
  res.json(data);
});

app.post("/", (req, res) => {
  //const prevHistory = JSON.parse(fs.readFileSync("./logic/history.json"));
  //const item = req.body;
  //const updatedHistory = [...prevHistory, item];
  //fs.writeFileSync("./logic/history.json", JSON.stringify(updatedHistory));
  console.log(req);
  console.log(req.body);

  let data = null;
  client.query('INSERT INTO "WinningHistory" VALUES ($1 $2)', req.body);
  res.send("ok");
});

app.listen(3001, "127.0.0.1", () => {
  console.log("listening on 30001");
});
*/
module.exports = app;
