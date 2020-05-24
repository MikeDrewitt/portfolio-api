import express from "express";

import adventures from "./adventures.route";
import status from "./status.route";
import users from "./users.route";

const Router = express.Router();

Router.use("/adventures", adventures);
Router.use("/status", status);
Router.use("/users", users);

Router.use("/", (req, res, next) => {
  res.status(404).send("Portfolio API - Not found");
});

export default Router;
