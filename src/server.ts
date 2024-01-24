import express from "express";
import http from "http";
const app = express();
app.get("/", (req, res) => {
  res.json({ message: "server is runner " });
});
app.listen(5000, () => {
  console.log("server is runner in: http://localhost:5000/");
});
