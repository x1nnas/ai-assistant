import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import { analyzeEmail } from "./integrations/ai/claudeService.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/analyze", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const result = await analyzeEmail(email);

    return res.json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});