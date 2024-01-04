import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          fullname: "User 1",
          email: "user1@test.com",
          password:
            "$2b$10$W./GL4g9fKuIyLYzH6BsQe7LzvX2l.uEcintM5LyhQN4miHPfHlwa", // test1
        },
        {
          id: 2,
          fullname: "User 2",
          email: "user2@test.com",
          password:
            "$2b$10$sPJYyf75p6V/GPfxBhmNL.vqIlY.o65IYk4CWfpXQWnoW8AIffCEe", // test2
        },
        {
          id: 3,
          fullname: "User 3",
          email: "user3@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 4,
          fullname: "User 4",
          email: "user4@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 5,
          fullname: "User 5",
          email: "user5@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 6,
          fullname: "User 6",
          email: "user6@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 7,
          fullname: "User 7",
          email: "user7@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 8,
          fullname: "User 8",
          email: "user8@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 9,
          fullname: "User 9",
          email: "user9@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 10,
          fullname: "User 10",
          email: "user10@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 11,
          fullname: "User 11",
          email: "user11@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 12,
          fullname: "User 12",
          email: "user12@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 13,
          fullname: "User 13",
          email: "user13@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 14,
          fullname: "User 14",
          email: "user14@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 15,
          fullname: "User 15",
          email: "user15@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 16,
          fullname: "User 16",
          email: "user16@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 17,
          fullname: "User 17",
          email: "user17@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 18,
          fullname: "User 18",
          email: "user18@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 19,
          fullname: "User 19",
          email: "user19@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 20,
          fullname: "User 20",
          email: "user20@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 21,
          fullname: "User 21",
          email: "user21@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 22,
          fullname: "User 22",
          email: "user22@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 23,
          fullname: "User 23",
          email: "user23@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 24,
          fullname: "User 24",
          email: "user24@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 25,
          fullname: "User 25",
          email: "user25@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 26,
          fullname: "User 26",
          email: "user26@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 27,
          fullname: "User 27",
          email: "user27@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 28,
          fullname: "User 28",
          email: "user28@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 29,
          fullname: "User 29",
          email: "user29@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 30,
          fullname: "User 30",
          email: "user30@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 31,
          fullname: "User 31",
          email: "user31@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 32,
          fullname: "User 32",
          email: "user32@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 33,
          fullname: "User 33",
          email: "user33@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 34,
          fullname: "User 34",
          email: "user34@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 35,
          fullname: "User 35",
          email: "user35@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 36,
          fullname: "User 36",
          email: "user36@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 37,
          fullname: "User 37",
          email: "user37@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 38,
          fullname: "User 38",
          email: "user38@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 39,
          fullname: "User 39",
          email: "user39@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 40,
          fullname: "User 40",
          email: "user40@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 41,
          fullname: "User 41",
          email: "user41@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 42,
          fullname: "User 42",
          email: "user42@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 43,
          fullname: "User 43",
          email: "user43@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 44,
          fullname: "User 44",
          email: "user44@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 45,
          fullname: "User 45",
          email: "user45@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 46,
          fullname: "User 46",
          email: "user46@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 47,
          fullname: "User 47",
          email: "user47@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 48,
          fullname: "User 48",
          email: "user48@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 49,
          fullname: "User 49",
          email: "user49@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
        {
          id: 50,
          fullname: "User 50",
          email: "user50@test.com",
          password:
            "$2b$10$tW.NR6oPKAIa6BPRX5fs0eM7Py4rxUbVOysRafdxWp4MULE9wvjVW",
        },
      ]);
    });
}
