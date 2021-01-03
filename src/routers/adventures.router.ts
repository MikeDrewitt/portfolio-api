// Libraries
import express from "express";

// Validator
import { create as validation } from "@middleware/validators/adventures.validator";

// Controller
import { get, post } from "@controllers/adventures.controller";

const Router = express.Router();

Router.get("/", get);
Router.post("/", validation, post);

export default Router;
