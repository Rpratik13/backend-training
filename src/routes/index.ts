import { Router } from "express";

import authRoutes from "./auth";
import cookieRoutes from "./cookie";
import userRoutes from "./user";
import projectRoutes from "./project";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);
router.use("/projects", projectRoutes);
router.use("/cookie", cookieRoutes);

export default router;
