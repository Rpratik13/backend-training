import { NextFunction, Request, Response } from "express";

import * as projectService from "../service/project";

export const getAll = async (_req: Request, res: Response) => {
  const data = await projectService.getAll();

  return res.json({
    data,
  });
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const data = await projectService.getById(id);

    return res.json({
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;

    const data = await projectService.create(body);

    return res.json({ message: "Project created successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await projectService.update(id, body);

    return res.json({ data });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);

    const data = await projectService.deleteProject(id);

    return res.json({ message: "Project successfully deleted" });
  } catch (error) {
    next(error);
  }
};
