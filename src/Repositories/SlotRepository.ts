import { SlotStore } from "../Store/SlotStore";
import { Slot } from "../Models/Slot";

export class SlotRepository {
    private readonly _slotStore: SlotStore;

    public constructor(slotStore: SlotStore) {
        this._slotStore = slotStore;
    }

    public FindSlotByParkedCarPlateNumber(carPlateNumber: string): Slot | null {
        let query = this._slotStore.Slots.filter(slot => slot.ParkedCar?.PlateNumber === carPlateNumber);
        if(query.length === 0) return null
        return query[0];
    }

    /**
     * Returns all slots with the matching isUsed flag
     * @param isUsed Indicates whether the slot is used or not; defaults to true
     * @returns Slots that has the matching status
     */
    public FindSlotsByParkedStatus(isUsed: boolean = true): Slot[] {
        return this._slotStore.Slots.filter(slot => slot.IsUsed === isUsed);
    }

    public FindSlotBySlotId(slotId: string): Slot | null {
        let query = this._slotStore.Slots.filter(slot => slot.Id === slotId);
        if(query.length === 0) return null
        return query[0];
    }

    public UpdateSlot(slot: Slot): void {
        let index = Number(slot.Id) - 1;
        this._slotStore.Slots[index] = slot;
    }
}
