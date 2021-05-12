import { Router } from "express";
import { ParkCarController } from "./Controllers/ParkCarController";
import { UnparkCarController } from "./Controllers/UnparkCarController";
import { FindSlotByCarPlateNumberController } from "./Controllers/FindSlotByCarPlateNumberController";

export const Routes = Router();

Routes.post("/api/parking/parkCar", ParkCarController);
Routes.put("/api/parking/unparkCar", UnparkCarController);
Routes.get("/api/parking/findSlotByPlateNumber", FindSlotByCarPlateNumberController);
