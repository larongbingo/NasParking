import { CarParkLog } from "../Models/CarParkLog";
import { CarParkLogStore } from "../Store/CarParkLogStore";

export class CarParkLogRepository {
    private _carParkLogStore: CarParkLogStore;

    public constructor(carParkLogStore: CarParkLogStore) {
        this._carParkLogStore = carParkLogStore;
    }

    public GetAllLogs(): CarParkLog[] {
        return this._carParkLogStore.CarParkLogs;
    }

    public AddLog(newCarLog: CarParkLog): void {
        this._carParkLogStore.CarParkLogs.push(newCarLog);
    }
}
