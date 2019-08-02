const express = require("express");
const favicon = require("express-favicon");
const app = express();
let sounds = ["daddy", "lazer", "pingas", "horn", "fart"];

app.use(express.static("public"));
app.use(favicon(__dirname + "/public/assets/gun.png"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/css", (req, res) => {
  res.sendFile(__dirname + "/index.css");
});

app.get("/js", (req, res) => {
  res.sendFile(__dirname + "/index.js");
});

app.get("/revolver", (req, res) => {
  res.sendFile(__dirname + "/public/assets/revolver.png");
});

app.get("/sound", (req, res) => {
  res.send({
    url: `/assets/${sounds[Math.floor(Math.random() * sounds.length)]}.mp3`
  });
});

app.listen(process.env.PORT || 6000, function() {});
