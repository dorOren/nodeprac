const express = require("express");
const { Client } = require("pg");
const fs = require("fs");

const app = express();
const Client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "JustDorddd1",
  database: "TicTacToe",
});

client
  .connect()
  .then(() => console.log("Connected to db"))
  .then(() => client.query("SELECT * FROM WinningHistory"))
  .then((res) => console.table(res.rows))
  .catch((e) => console.log(e));
/*
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req, res) => {
  const data = fs.readFileSync("./logic/history.json");
  const history = JSON.parse(data);

  res.json(history);
});

app.post("/", (req, res) => {
  const prevHistory = JSON.parse(fs.readFileSync("./logic/history.json"));
  const item = req.body;
  const updatedHistory = [...prevHistory, item];
  fs.writeFileSync("./logic/history.json", JSON.stringify(updatedHistory));

  res.send("ok");
});

app.listen(3001, "127.0.0.1", () => {
  console.log("listening on 30001");
});
module.exports = app;
*/
