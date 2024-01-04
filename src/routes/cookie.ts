import { Request, Response, Router } from "express";

const router = Router();

router.use("/set-cookie", (req: Request, res: Response) => {
  res.cookie("foo", "bar", { secure: true });

  return res.json("Cookie set");
});

router.use("/get-cookie", (req: Request, res: Response) => {
  return res.json({ cookie: req.headers.cookie });
});
export default router;
