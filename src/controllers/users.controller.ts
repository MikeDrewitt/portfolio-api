import { validationResult } from "express-validator";

import User from "../models/User.model";

import passport from "passport";
import jwt from 'jsonwebtoken';

import { NotFound } from "../errors/api.errors";

export async function get(req: any, res: any, next: any) {
  try {
    const users = await User.list();

    res.status(200).send(users);
  } catch (err) {
    next(err);
  }
}

export async function detail(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const user = await User.retrieve(id);

    if (!user) return res.status(404).json({ error: NotFound });

    res.status(200).send(user);
  } catch (err) {
    next(err);
  }
}

export async function post(req: any, res: any, next: any) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { username, password } = req.body;
    const user = new User(username);
    const dbUser = await user.create(password);

    res.status(201).send(dbUser);
  } catch (err) {
    res.status(400).json({ message: err.detail });
  }
}

export async function patch(req: any, res: any, next: any) {
  try {
    const { body } = req;
    const { id } = req.params;

    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const user = await User.retrieve(id);

    if (!user) res.status(404).send();

    await user.update(body);

    res.status(200).send();
  } catch (err) {
    next(err);
  }
}

export async function _delete(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const dbResponse = await User.delete(id);

    if (!dbResponse.affected) return res.status(404).json({ error: NotFound });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function login(req: any, res: any, next: any) {
  passport.authenticate(
    'login',
    async (err, user, info) => {
      try {
        if (!user) return next(new Error("Unknown username or incorrect password"));

        req.login(
          user,
          { session: false },
          async (error: any) => {
            if (error) return next(error);

            // Here's what we're encoding onto the token
            const body = { id: user.id, username: user.username };
            const token = jwt.sign({ user: body }, 'TOP_SECRET');

            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
}
