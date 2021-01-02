// Libraries
import express from "express";
import passport from "passport";

// Validator
import { create as createValidator, update as updateValidator } from "../validators/users.validator";

// Controller
import { get, detail, post, patch, _delete, login } from "../controllers/users.controller";

const Router = express.Router();

Router.get("/", get);
Router.get("/:id", detail);
Router.post("/", createValidator, post);
Router.patch("/:id", updateValidator, patch);
Router.delete("/:id", passport.authenticate('jwt', { session: false }), _delete);

Router.post("/login", createValidator, login);

export default Router;
