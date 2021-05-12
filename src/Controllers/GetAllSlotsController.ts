import { RequestHandler } from "express";
import { slotRepository } from "../Instances";

export const GetAllSlotsController: RequestHandler = (req, res, next) => {
    try {
        res.json(slotRepository.GetAllSlots());
    }
    catch(err) {
        next(err);
    }
};
