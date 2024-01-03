import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import projectRoutes from "./project";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);
router.use("/projects", projectRoutes);

export default router;
