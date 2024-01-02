import { Router } from "express";

import authRoutes from "./auth";
import userRoutes from "./user";
import { auth } from "../middleware/auth";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", auth, userRoutes);

export default router;
