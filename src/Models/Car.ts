
export class Car {
    public constructor(plateNumber: string) {
        this.PlateNumber = plateNumber;
        this.ParkedDateFrom = new Date(); 
    }

    public readonly PlateNumber: string;
    public readonly ParkedDateFrom: Date;
}
