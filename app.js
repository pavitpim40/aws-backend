const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello Backend from AWS" });
});

app.listen(3000);
