import { check } from "express-validator";

export const create = [
  check("username").isString().trim(),
  check("location").isString().trim().optional({ nullable: true }),
];
