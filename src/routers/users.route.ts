// Libraries
import express from "express";

// Validator
import { create as validator } from "../validators/users.validator";

// Controller
import { get, post } from "../controllers/users.controller";

const Router = express.Router();

Router.get("/", get);
Router.post("/", validator, post);

export default Router;
