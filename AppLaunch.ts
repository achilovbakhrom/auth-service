import "reflect-metadata";
import {createConnection} from "typeorm";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import {logger} from "./src/utils/logger";
import { InversifyExpressServer } from "inversify-express-utils";
import {container} from "./src/di/container";
import { express as swaggerExpress } from "swagger-express-ts";

export class AppLauncher {
    private readonly server: InversifyExpressServer;

    constructor() {
        // @ts-ignore
        this.server = new InversifyExpressServer(container);
        dotenv.config({ path: ".env" });
        this.registerMiddlewares();
        this.registerRoutes();
        this.registerDbConnection();
    }

    private registerMiddlewares = () => {
        this.server.setConfig((app) => {
            logger.info("applying middlewares")

            app.use( '/api-docs/swagger' , express.static( 'swagger' ) );
            app.use( '/api-docs/swagger/assets' , express.static( 'node_modules/swagger-ui-dist' ) );

            app.use(express.json())
            app.use(express.urlencoded({ extended: false }))
            app.use(cookieParser())
            app.use(swaggerExpress(
                {
                    definition : {
                        basePath: "/api-docs/swagger",
                        info : {
                            title : "Authentication Service Api" ,
                            version : "1.0",

                        },


                    }
                }
            ));
        })
    }

    private registerRoutes = () => {

    }

    private registerDbConnection = () => {
        this.server.setConfig((app) => {
            logger.info("DB Connection")
            // createConnection(getConnectionOptions())
            createConnection();
        })
    }

    launch = () => {
        console.log("test", process.env.PORT)
        this.server.build().listen(process.env.PORT, () => {
            logger.info(`Server started on ${process.env.PORT} port.`)
        })
    }
}
