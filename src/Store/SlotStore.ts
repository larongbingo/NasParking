import { Slot } from "../Models/Slot";

export class SlotStore {
    public constructor(slotCount: number) {
        for(let i = 0; i < slotCount; i++) 
            this.Slots.push(new Slot(null, String(i + 1)));
    }

    public Slots: Slot[] = [];
}
