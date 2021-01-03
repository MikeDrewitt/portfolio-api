import express from "express";

import adventures from "./adventures.route";
import status from "./status.route";
import users from "./users.route";

import { NotFound } from '../errors/api.errors';

const Router = express.Router();

Router.use("/adventures", adventures);
Router.use("/status", status);
Router.use("/users", users);

Router.use("/", (req: any, res: any, next: any) => res.status(404).send(NotFound));

export default Router;
