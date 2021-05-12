
export class Car {
    public constructor(plateNumber: string) {
        this.PlateNumber = plateNumber;
        this.ParkedFrom = new Date(); 
    }

    public readonly PlateNumber: string;
    public readonly ParkedFrom: Date;
}
