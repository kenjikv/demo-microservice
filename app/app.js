import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "demo-microservice" });
});

export default app;
