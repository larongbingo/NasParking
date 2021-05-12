import { RequestHandler } from "express";
import { FindSlotByCarePlateNumberDto } from "../Dto/FindSlotByCarPlateNumberDto";
import { slotRepository } from "../Instances";

export const FindSlotByCarPlateNumberController: RequestHandler = (req, res, next) => {
    try {
        const data: FindSlotByCarePlateNumberDto = req.body;
        const slot = slotRepository.FindSlotByCarPlateNumber(data.CarPlateNumber);
        if(!data.CarPlateNumber) {
            res.status(400);
            return res.json({message: "CarPlateNumber is empty"});
        }
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
