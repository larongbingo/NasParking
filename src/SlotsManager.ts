import { Slot } from "./Models/Slot";
import { Car } from "./Models/Car";

export class SlotsManager {
    public constructor(slotCount: number) {
        for(let i = 0; i < slotCount; i++) 
            this.Slots.push(new Slot(null, String(i + 1)));
    }

    public Slots: Slot[] = [];

    public ParkCar(carPlateNumber: string): Slot | null {
        if(this.Slots.filter(slot => !slot.IsUsed).length === 0) return null;
        if(this.Slots.filter(slot => slot.ParkedCar?.PlateNumber === carPlateNumber).length !== 0) return null;
        
        const emptyCarPark = this.Slots.filter(slot => !slot.IsUsed)[0];
        const index = this.Slots.indexOf(emptyCarPark);

        emptyCarPark.ParkedCar = new Car(carPlateNumber);
        this.Slots[index] = emptyCarPark;

        return emptyCarPark;
    }

    public UnparkCar(slotIdToEmpty: string): boolean {
        if(this.Slots.filter(slot => slot.Id === slotIdToEmpty).length === 0) return false;

        const slotToEmpty = this.Slots.filter(slot => slot.Id === slotIdToEmpty)[0];
        const index = this.Slots.indexOf(slotToEmpty);
        
        slotToEmpty.ParkedCar = null;
        this.Slots[index] = slotToEmpty;

        return true;
    }
}
