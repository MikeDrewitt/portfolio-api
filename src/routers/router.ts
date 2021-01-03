import express from "express";

import adventures from "@routers/adventures.router";
import status from "@routers/status.router";
import users from "@routers/users.router";

import { NotFound } from '@constants/errors/api.errors';

const Router = express.Router();

Router.use("/adventures", adventures);
Router.use("/status", status);
Router.use("/users", users);

Router.use("/", (req: any, res: any, next: any) => res.status(404).send(NotFound));

export default Router;
