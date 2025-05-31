import { Router, Request, Response } from "express";
import exibitionsData from "../data/exibitions.json";

type TExibition = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

const exibitions: TExibition[] = exibitionsData;

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(exibitions);
});

export default router;