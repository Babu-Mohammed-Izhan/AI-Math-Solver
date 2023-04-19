/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express, { Request, Response } from "express";
import aiService from "../service/aiService";

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).send(aiService.getAI());
});

router.get("/:title", (req: Request, res: Response) => {
  const title = req.params.title;

  res.status(200).send(aiService.getOneAI(title));
});

router.post("/", (req: Request, res: Response) => {
  const note = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };

  res.status(200).send(note);
});

export default router;
