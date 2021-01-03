import { check } from "express-validator";

export const create = [
  check("username").isString().trim(),
  check("password").isString().trim(),
];

export const update = [
  check("username").isString().trim().optional({ nullable: true }),
];
