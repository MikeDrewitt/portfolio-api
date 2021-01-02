// Libraries
import express from "express";

// Middleware
import { create as createValidator, update as updateValidator } from "../validators/users.validator";
import { userAuth } from "../middleware/passport.middleware";

// Controller
import { get, detail, post, patch, _delete, login } from "../controllers/users.controller";

const Router = express.Router();

Router.get("/", get);
Router.get("/:id", detail);
Router.post("/", createValidator, post);
Router.patch("/:id", updateValidator, patch);
Router.delete("/:id", userAuth, _delete);

Router.post("/login", createValidator, login);

export default Router;
