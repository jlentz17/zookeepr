const path = require("path");
const router = require("express").Router();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("/animals", (req, res) => {
      res.sendFile(path.join(__dirname, "./public/animals.html"));
  });
  app.get("/zookeepers", (req, res) => {
      res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
  });
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "./public/index.html"));
  });

  module.exports = router;