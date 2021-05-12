import { Slot } from "./Models/Slot";
import { Car } from "./Models/Car";
import { SlotRepository } from "./Repositories/SlotRepository";

export class SlotsManager {
    public constructor(slotRepository: SlotRepository) {
        this._slotRepository = slotRepository;
    }

    private readonly _slotRepository: SlotRepository;
    
    public ParkCar(carPlateNumber: string): Slot | null {
        if(this._slotRepository.FindSlotByParkedCarPlateNumber(carPlateNumber)) return null;

        const emptyCarParks = this._slotRepository.FindSlotsByParkedStatus(false);
        if(emptyCarParks.length === 0) return null;

        const emptyCarPark = emptyCarParks[0];
        emptyCarPark.ParkedCar = new Car(carPlateNumber);
        this._slotRepository.UpdateSlot(emptyCarPark);

        return emptyCarPark;
    }

    public UnparkCar(slotIdToEmpty: string): boolean {
        const slotToEmpty = this._slotRepository.FindSlotBySlotId(slotIdToEmpty);
        if(!slotToEmpty) return false;

        slotToEmpty.ParkedCar = null;

        this._slotRepository.UpdateSlot(slotToEmpty);

        return true;
    }
}
