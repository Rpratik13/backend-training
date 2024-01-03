import Joi from "joi";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "../constant/pagination";

const getProjectsSchema = Joi.object({
  page: Joi.number().integer().min(1).default(DEFAULT_PAGE),

  size: Joi.number().integer().min(1).max(40).default(DEFAULT_PAGE_SIZE),

  startDate: Joi.date().iso(),

  endDate: Joi.date().iso(),
});

export { getProjectsSchema };
