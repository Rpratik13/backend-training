import { Knex } from "knex";

const TABLE_NAME = "departments";

/**
 * Delete existing entries and seed values for table departments.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */

const DEPARTMENTS = ["AI", "Data", "QA"];

export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert(
        DEPARTMENTS.map((department, idx) => ({
          id: idx + 1,
          name: department,
        }))
      );
    });
}
