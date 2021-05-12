import Express from "express";
import { Routes } from "./Routes";
import { Error404HandlingMiddleware } from "./Middlewares/Error404Handling";
import { GeneralErrorHandlingMiddleware } from "./Middlewares/GeneralErrorHandling";

export const App = Express();

App.use(Routes);

App.use(Error404HandlingMiddleware);

App.use(GeneralErrorHandlingMiddleware);
