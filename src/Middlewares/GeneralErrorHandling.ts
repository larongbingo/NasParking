import { ErrorRequestHandler } from "express";

export const GeneralErrorHandlingMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500);

    res.json({message: err.message || "An error occurred"});   
};