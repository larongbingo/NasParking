import { RequestHandler } from "express";
import { FindSlotByCarePlateNumberDto } from "../Dto/FindSlotByCarPlateNumberDto";
import { slotRepository } from "../Instances";

export const FindSlotByCarPlateNumberController: RequestHandler = (req, res, next) => {
    try {
        const data: FindSlotByCarePlateNumberDto = req.body;
        const slot = slotRepository.FindSlotByCarPlateNumber(data.CarPlateNumber);
        if(slot) {
            res.status(200);
            res.json(slot);
        }
        else {
            res.status(404);
            res.json({message: `Car ${data.CarPlateNumber} does not exist`});
        }
    }
    catch(err) {
        next(err);
    }
};
