import { RequestHandler } from "express";
import { UnparkCarDto } from "../Dto/UnparkCarDto";
import { slotsManager, carParkLogRepository } from "../Instances";
import { CarParkLog } from "../Models/CarParkLog";

export const UnparkCarController: RequestHandler = (req, res, next) => {
    try {
        const data: UnparkCarDto = req.body;
        const isCarUnparked = slotsManager.UnparkCar(data.SlotNumber);
        if(!data.SlotNumber) {
            res.status(400);
            return res.json({message: "SlotNumber is empty"});
        }
        if(isCarUnparked) {
            res.json({message: `Car ${isCarUnparked.PlateNumber} was removed from slot ${data.SlotNumber}`});
            carParkLogRepository.AddLog(new CarParkLog(isCarUnparked));
            res.status(200);
        }
        else {
            res.json({message: `${data.SlotNumber} does not exist`})
            res.status(404);
        }
    }
    catch(err) {
        next(err);
    }
};
