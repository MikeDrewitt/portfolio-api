import { validationResult } from "express-validator";

import { create, list } from "../models/User.model";

export async function get(req: any, res: any, next: any) {
  try {
    const users = await list();

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
}

export async function post(req: any, res: any, next: any) {
  try {
    const { body } = req;
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const user = await create(body);

    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
}
