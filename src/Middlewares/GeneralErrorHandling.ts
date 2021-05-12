import { ErrorRequestHandler } from "express";

export const GeneralErrorHandlingMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    res.status(err.status || 500);

    if(process.env.NODE_ENV === "development") {
        res.json({message: err.message});    
    }
    else {
        res.json({message: "An error occured"});
    }
};