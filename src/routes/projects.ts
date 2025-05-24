import { Router, Request, Response } from "express";
import projectsData from "../data/projects.json";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  previewImage: string;
  fullDescription: string;
  images: string[];
};

const projects: Project[] = projectsData;

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const brief = projects.map(({ id, title, shortDescription, previewImage }) => ({
    id,
    title,
    shortDescription,
    previewImage,
  }));
  res.json(brief);
});

//@ts-expect-error
router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
  const project = projects.find((p) => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Проект не найден" });
  }
  res.json(project);
});

export default router;
