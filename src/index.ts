import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectsRouter from "./routes/projects";
import path from "path";
import exibitionsRouter from "./routes/exibitions";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/exibitions", exibitionsRouter);

app.use("/projects", projectsRouter);
// app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/images", express.static(path.join(process.cwd(), "images")));

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
