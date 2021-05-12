import { RequestHandler } from "express";
import { ParkCarDto } from "../Dto/ParkCarDto";
import { slotsManager } from "../Instances";

export const ParkCarController: RequestHandler = (req, res, next) => {
    try {
        const data: ParkCarDto = req.body;
        const isCarParked = slotsManager.ParkCar(data.CarPlateNumber)
        if(!data.CarPlateNumber) {
            res.status(400);
            return res.json({message: "CarPlateNumber is empty"});
        }
        if(isCarParked) {
            res.status(201);
            res.json(isCarParked);
        }
        else {
            res.status(404);
            res.json({message: "Car cannot be parked. Either car park is full or car plate number already is parked"});
        }
    }
    catch(err) {
        next(err);
    }
};
