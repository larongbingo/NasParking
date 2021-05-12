
export class Car {
    public constructor(plateNumber: string) {
        this.PlateNumber = plateNumber;
        this.ParkedSince = new Date(); 
    }

    public readonly PlateNumber: string;
    public readonly ParkedSince: Date;
}
