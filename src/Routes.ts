import { Router } from "express";
import { ParkCarController } from "./Controllers/ParkCarController";
import { UnparkCarController } from "./Controllers/UnparkCarController";
import { FindSlotByCarPlateNumberController } from "./Controllers/FindSlotByCarPlateNumberController";
import { GetAllCarParkLogsController } from "./Controllers/GetAllCarParkLogsController";
import { GetAllSlotsController } from "./Controllers/GetAllSlotsController";

export const Routes = Router();

Routes.post("/api/parking/parkCar", ParkCarController);
Routes.put("/api/parking/unparkCar", UnparkCarController);
Routes.get("/api/parking/findSlotByPlateNumber", FindSlotByCarPlateNumberController);
Routes.get("/api/parking/getAllLogs", GetAllCarParkLogsController);
Routes.get("/api/parking/getAllSlots", GetAllSlotsController);
