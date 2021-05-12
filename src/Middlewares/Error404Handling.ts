import { RequestHandler } from "express";

export const Error404HandlingMiddleware: RequestHandler = (req, res, next) => {
    next({
        status: 404,
        message: "Route not found"
    });
};
