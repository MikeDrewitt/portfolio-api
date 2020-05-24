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

    const port = process.env.PORT || 3001;

    app.listen(port, () => console.log(`API listenting at port - ${port}`));
  })
  .catch((err) => console.log("TypeORM connection error: ", err));
