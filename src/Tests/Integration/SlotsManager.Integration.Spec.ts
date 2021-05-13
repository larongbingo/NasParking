import "mocha";
import { SlotsManager } from "../../SlotsManager";
import { SlotRepository } from "../../Repositories/SlotRepository";
import { SlotStore } from "../../Store/SlotStore";
import { Slot } from "../../Models/Slot";
import { should } from "chai";
import "chai/register-should";
import { Car } from "../../Models/Car";

describe("SlotsManager Integration Tests", () => {
    let sut: SlotsManager;
    let slotRepo: SlotRepository;
    let slotStore: SlotStore;

    before(() => {
        slotStore = new SlotStore(10);
        slotRepo = new SlotRepository(slotStore);
        sut = new SlotsManager(slotRepo);
    });

    describe("ParkCar method", () => {
        it("Should return a Slot instance if there's an empty Slot and no existing car plate number", () => {
            const slot = new Slot(null, "1");
            slotStore.Slots = [slot];

            const result = sut.ParkCar("TEST");

            should().exist(result);
        });
        
        it("Should return null if there's no empty Slot", () => {
            const slot = new Slot(new Car("TEST123"), "1");
            slotStore.Slots = [slot];

            const result = sut.ParkCar("TEST");

            should().not.exist(result);
        });

        it("Should return null if there's an existing Car plate number", () => {
            const slot = new Slot(new Car("TEST123"), "1");
            slotStore.Slots = [slot];

            const result = sut.ParkCar("TEST123");

            should().not.exist(result);
        });
    });

    describe("UnparkCar method", () => {
        it("Should return a Car instance if there's an existing Slot number", () => {
            const slot = new Slot(new Car("TEST123"), "1");
            slotStore.Slots = [slot];

            const result = sut.UnparkCar("1");

            should().exist(result);
        });

        it("Should return null if there's no Slot number existing", () => {
            slotStore.Slots = [];

            const result = sut.UnparkCar("ASD");

            should().not.exist(result);
        });

        it("Should return null if there's no Car on the given slot", () => {
            const slot = new Slot(null, "1");
            slotStore.Slots = [slot];

            const result = sut.UnparkCar("1");

            should().not.exist(result);
        });
    });
});
