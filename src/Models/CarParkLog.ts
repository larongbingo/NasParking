import { Car } from "./Car";

export class CarParkLog {
    public constructor(parkedCar: Car) {
        this.ParkedCar = parkedCar;
        this.ParkedDateTo = new Date();
    }

    public ParkedCar: Car;
    public ParkedDateTo: Date;
}
