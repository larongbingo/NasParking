import { RequestHandler } from "express";
import { carParkLogRepository } from "../Instances";

export const GetAllCarParkLogsController: RequestHandler = (req, res, next) => {
    try {
        res.json(carParkLogRepository.GetAllLogs());
    }
    catch(err) {
        next(err);
    }
};
