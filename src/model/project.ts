import { PaginationQuery } from "../interface/pagination";
import BaseModel from "./baseModel";

export default class ProjectModel extends BaseModel {
  static async getAll(params: any) {
    const query = this.queryBuilder()
      .select({
        id: "id",
        name: "name",
        description: "description",
        startDate: "startDate",
        endDate: "endDate",
      })
      .table("projects");

    query.offset(params.offset).limit(params.limit);

    if (params.startDate && params.endDate) {
      query
        .where("startDate", "<=", params.endDate)
        .where("endDate", ">=", params.startDate);
    }

    return query;
  }

  static countAll(params: any) {
    const query = this.queryBuilder()
      .table("projects")
      .count({ count: "id" })
      .first();

    if (params.startDate && params.endDate) {
      query
        .where("startDate", "<=", params.endDate)
        .where("endDate", ">=", params.startDate);
    }

    return query;
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
