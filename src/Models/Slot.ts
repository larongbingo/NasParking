import { Car } from "./Car";

export class Slot {
    public constructor(parkedCar: Car | null, id: string) {
        this.ParkedCar = parkedCar;
        this.Id = id;
    }

    public Id: string;
    public ParkedCar: Car | null;

    public get IsUsed(): boolean {
        return this.ParkedCar !== null;
    }
}
