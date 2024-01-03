import { Router } from "express";

import {
  deleteProject,
  getById,
  getAll,
  updateProject,
  createProject,
} from "../controller/project";
import { getProjectsSchema } from "../schema/project";
import { validateReqQuery } from "../middleware/validator";

const router = Router();

router.get("/", validateReqQuery(getProjectsSchema), getAll);

router.get("/:id", getById);

router.post("/", createProject);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
