import { Router, Request, Response } from "express";
import projectsData from "../data/projects.json";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  previewImage: string;
  fullDescription: string[];
  // addittional: string;
  primaryImages: string[];
  vertical: string[]
  secondaryImages: string[];
  last: string[];
};

type TExibition = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = projectsData;

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json(projects);
});

//@ts-ignore
router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Проект не найден" });
  }

  res.json(project);
});

export default router;
