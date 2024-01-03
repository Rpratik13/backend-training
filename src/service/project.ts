import ProjectModel from "../model/project";

export const getAll = async () => {
  const data = await ProjectModel.getAll();

  return data;
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
