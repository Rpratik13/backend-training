import { Router } from "express";

import {
  deleteProject,
  getById,
  getAll,
  updateProject,
} from "../controller/project";
import { validateReqBody, validateReqQuery } from "../middleware/validator";
import { updateUserSchema } from "../schema/user";

const router = Router();

router.get("/", getAll);

router.get("/:id", getById);

router.put("/:id", updateProject);

router.delete("/:id", deleteProject);

export default router;
