const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ message: "Hello from CI/CD!" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).json({ error: "numbers only" });
  res.json({ result: a + b });
});

module.exports = app;
