import { Router } from "express";

import {
  deleteProject,
  getById,
  getAll,
  updateProject,
  createProject,
} from "../controller/project";

const router = Router();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", createProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
