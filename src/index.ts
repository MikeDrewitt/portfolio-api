// Libraries
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ORM Libraries
import reflexMetadata from "reflect-metadata";
import { createConnection } from "typeorm";

// Middleware
import routes from "./routers/routes";
import errorHandler from "./middleware/errorHandler.middleware";
import './middleware/passport.middleware'; // Initializes passport middleware

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
