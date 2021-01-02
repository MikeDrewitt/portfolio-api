// Libraries
import express from "express";

// Controller
import { get } from "../controllers/status.controller";

// Middleware
import { userAuth, systemAuth } from "../middleware/passport.middleware";

const Router = express.Router();

Router.get("/", get);
Router.get("/checkAuth", userAuth, get);
Router.get("/checkSystem", systemAuth, get);

export default Router;
