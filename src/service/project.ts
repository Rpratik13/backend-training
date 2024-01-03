import { PaginationQuery } from "../interface/pagination";
import { GetAllProjectsQuery } from "../interface/project";
import ProjectModel from "../model/project";
import { buildMeta, getPaginationOptions } from "../util/pagination";

export const getAll = async (query: GetAllProjectsQuery) => {
  const { page, size } = query;

  const pageDetails = getPaginationOptions({ page, size });

  const projectsPromise = ProjectModel.getAll({ ...pageDetails, ...query });
  const countPromise = ProjectModel.countAll(query);

  const [projects, count] = await Promise.all([projectsPromise, countPromise]);

  const total = count.count;
  const meta = buildMeta(total, size, page);

  return {
    data: projects,
    meta,
  };
};

export const getById = async (id: number) => {
  const data = await ProjectModel.getById(id);

  //   if (!data) {
  //     throw new NotFoundError(`Project with id: ${id} not found`);
  //   }

  return data;
};

export const create = async (body: any) => {
  await ProjectModel.create(body);
};

export const update = async (id: number, body: any) => {
  const project = await ProjectModel.getById(id);

  //   if (!project) {
  //     throw new NotFoundError(`Project with id: ${id} not found`);
  //   }

  await ProjectModel.update(id, body);

  const updatedUser = await ProjectModel.getById(id);

  return updatedUser;
};

export const deleteProject = async (id: number) => {
  const project = await ProjectModel.getById(id);

  //   if (!project) {
  //     throw new NotFoundError(`Project with id: ${id} not found`);
  //   }

  await ProjectModel.delete(id);
};
