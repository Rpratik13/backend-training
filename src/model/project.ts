import BaseModel from "./baseModel";

export default class ProjectModel extends BaseModel {
  static async getAll() {
    return this.queryBuilder()
      .select({
        id: "id",
        name: "name",
        description: "description",
        startDate: "startDate",
        endDate: "endDate",
      })
      .table("projects");
  }

  static async getById(id: number) {
    return this.queryBuilder()
      .select({
        id: "id",
        name: "name",
        description: "description",
        startDate: "startDate",
        endDate: "endDate",
      })
      .table("projects")
      .where({ id })
      .first();
  }

  static async create(project: any) {
    return this.queryBuilder().insert(project).table("projects");
  }

  static async update(id: number, project: any) {
    return this.queryBuilder().update(project).table("projects").where({ id });
  }

  static async delete(id: number) {
    return this.queryBuilder().table("projects").where({ id }).del();
  }
}
