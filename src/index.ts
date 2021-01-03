// Libraries
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Allows alias paths
// New paths need to be added to package.json, tsconfig.json, and jest.config.js
// tsconfig.json - allows linting + general typescript to work
// package.json - allows compiled js to work
// jest.config.js - allows testing imports to work
import 'module-alias/register';

// ORM Libraries
import reflexMetadata from "reflect-metadata";
import { createConnection } from "typeorm";

// Middleware
import routes from "./routers/router";
import errorHandler from "./middleware/errorHandler.middleware";
import './middleware/auth.middleware'; // Initializes passport middleware

import environment from "./environment";

const app = express();

createConnection()
  .then((connection) => {
    // Libraries
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan("combined"));

    // Middleware
    app.use("/", routes);
    app.use(errorHandler);

    app.listen(environment.port, () => console.log(`API listenting at port - ${environment.port}`));
  })
  .catch((err) => console.log("TypeORM connection error: ", err));
