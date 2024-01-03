import { PaginationQuery } from "./pagination";

export interface GetAllProjectsQuery extends PaginationQuery {
  startDate: string;
  endDate: string;
}
