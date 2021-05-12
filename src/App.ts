import Express from "express";
import { Routes } from "./Routes";
import { Error404HandlingMiddleware } from "./Middlewares/Error404Handling";
import { GeneralErrorHandlingMiddleware } from "./Middlewares/GeneralErrorHandling";
import { RateLimiterMiddleware } from "./Middlewares/RateLimiter";

export const App = Express();

App.use(Express.json())

App.use(RateLimiterMiddleware);

App.use(Routes);

App.use(Error404HandlingMiddleware);

App.use(GeneralErrorHandlingMiddleware);
