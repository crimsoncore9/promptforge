import { Router } from "express";

const router = Router();

// temporary in-memory data
const prompts = [
  {
    id: 1,
    title: "Startup pitch generator",
    content: "Generate a startup pitch for an AI product"
  }
];

// GET all prompts
router.get("/", (req, res) => {
  res.json(prompts);
});

// POST a new prompt
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content required" });
  }

  const newPrompt = {
    id: prompts.length + 1,
    title,
    content
  };

  prompts.push(newPrompt);
  res.status(201).json(newPrompt);
});

export default router;
