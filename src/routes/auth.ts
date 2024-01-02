import { Router } from "express";

import { signup } from "../controller/auth";
import { createUserSchema } from "../schema/user";
import { validateReqBody } from "../middleware/validator";
import { login } from "../controller/auth";

const router = Router();

router.post("/signup", validateReqBody(createUserSchema), signup);

router.post("/login", login);

router.get("/refresh");

export default router;
