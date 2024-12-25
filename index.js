const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("heloo how are you");
});

app.get("/about", (req, res) => {
  res.send("this is naqash");
});

app.get("/about/contact", (req, res) => {
  res.send("my conctact is your contact");
});

app.get("/gallery", (req, res) => {
  res.send("this is gallery");
});

app.get("/iphone/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(process.env.PORT);
