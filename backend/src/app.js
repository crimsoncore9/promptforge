import express from "express";

const app = express();

// middleware
app.use(express.json());

// health check route
app.get("/", (req, res) => {
  res.json({
    app: "PromptForge",
    status: "running",
  });
});

export default app;
