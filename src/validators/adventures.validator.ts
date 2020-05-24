import { check } from "express-validator";

export const create = [
  check("name").isString().trim().isLength({ max: 256 }),
  check("description").isString().trim().optional({ nullable: true }),
  check("addressLine1")
    .isString()
    .trim()
    .isLength({ max: 1024 })
    .optional({ nullable: true }),
];
