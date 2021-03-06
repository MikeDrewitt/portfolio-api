// Libraries
import express from "express";

// Middleware
import { create as createValidator, update as updateValidator } from "@middleware/validators/users.validator";
import { userAuth } from "@middleware/auth.middleware";

// Controller
import { get, detail, post, patch, _delete, login } from "@controllers/users.controller";

// Serialization
import { generic as genericSerializer } from '@middleware/serializers/user.serializer';

const Router = express.Router();

Router.get("/", get, genericSerializer);
Router.get("/:id", detail, genericSerializer);
Router.post("/", createValidator, post, genericSerializer);
Router.patch("/:id", updateValidator, patch);
Router.delete("/:id", userAuth, _delete);

Router.post("/login", createValidator, login);

export default Router;
