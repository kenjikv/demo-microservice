import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "demo-microservice" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

export default app;
