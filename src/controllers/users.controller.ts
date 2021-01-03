import { validationResult } from "express-validator";
import passport from "passport";
import jwt from 'jsonwebtoken';

// Models
import User from "@models/user.model";

// Constants
import environment from "@~/environment";
import TokenEncodeInfo from '@constants/TokenEncodeInfo.constant';
import UserRole from '@constants/types/userRole.type';

import { NotFound, Unauthorized } from "@constants/errors/api.errors";

export async function get(req: any, res: any, next: any) {
  try {
    req.users = await User.list();

    next();
  } catch (err) {
    next(err);
  }
}

export async function detail(req: any, res: any, next: any) {
  try {
    const { id } = req.params;
    const user = await User.retrieve(id);

    if (!user) return res.status(404).json(NotFound);

    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

export async function post(req: any, res: any, next: any) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, password } = req.body;
    const user = new User(username);
    const dbUser = await user.create(password);

    res.status(201).send(dbUser);
  } catch (err) {
    res.status(400).json({ error: err.detail });
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
    const { auth }: { auth: TokenEncodeInfo } = req;
    const { id }: { id: number } = req.params;

    if (auth.id !== id || auth.role !== UserRole.system) return res.status(401).json(Unauthorized)

    const dbResponse = await User.delete(id);

    if (!dbResponse.affected) return res.status(404).json(NotFound);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

export async function login(req: any, res: any, next: any) {
  const buildJwt = async (err: any, user: any) => {
    try {
      if (!user) return next(new Error("Unknown username or incorrect password"));

      req.login(user, { session: false }, async (error: any) => {
          if (error) return next(error);

          const auth = new TokenEncodeInfo(user);
          const token = jwt.sign({ auth }, environment.jwtSecreteKey);

          return res.status(200).json({ token });
        }
      );
    } catch (error) {
      next(error);
    }
  }

  passport.authenticate('login', buildJwt)(req, res, next);
}
