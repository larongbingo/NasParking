import { SlotsManager } from "../../SlotsManager";
import "mocha";
import sinon from "sinon";
import "chai/register-should";
import { SlotRepository } from "../../Repositories/SlotRepository";
import { Slot } from "../../Models/Slot";
import { Car } from "../../Models/Car";
import { should } from "chai";

describe("SlotsManager Unit Tests", () => {
    let sut: SlotsManager;
    let stubbedSlotRepo: SlotRepository;

    before(() => {
        stubbedSlotRepo = <SlotRepository> <any> sinon.stub(SlotRepository);
    });

    beforeEach(() => {
        sut = new SlotsManager(stubbedSlotRepo);
    });

    describe("ParkCar method", () => {
        it("Should return null when FindSlotByCarPlateNumber returns a Slot instance", () => {
            const slot = new Slot(new Car("TEST"), "1");
            stubbedSlotRepo.FindSlotByCarPlateNumber = sinon.stub().returns(slot);

            const result = sut.ParkCar("TEST");

            should().not.exist(result);
        });

        it("Should return null when FindSlotsByParkedStatus returns an empty array", () => {
            stubbedSlotRepo.FindSlotByCarPlateNumber = sinon.stub().returns(null);
            stubbedSlotRepo.FindSlotsByParkedStatus = sinon.stub().returns([]);

            const result = sut.ParkCar("TEST");

            should().not.exist(result);
        });

        it("Should return a Slot instance when all conditions are met", () => {
            stubbedSlotRepo.FindSlotByCarPlateNumber = sinon.stub().returns(null);
            stubbedSlotRepo.FindSlotsByParkedStatus = sinon.stub().returns([new Slot(null, "2")]);
            stubbedSlotRepo.UpdateSlot = sinon.spy();

            const result = sut.ParkCar("TEST");

            should().exist(result);
        });
    });

    describe("UnparkCar method", () => {
        it("Should return null when FindSlotBySlotId returns null", () => {
            stubbedSlotRepo.FindSlotBySlotId = sinon.stub().returns(null);

            const result = sut.UnparkCar("TEST");

            should().not.exist(result);
        });

        it("Should return a Car instance when all conditions are met", () => {
            const slot = new Slot(new Car("TEST"), "1");
            stubbedSlotRepo.FindSlotBySlotId = sinon.stub().returns(slot);
            stubbedSlotRepo.UpdateSlot = sinon.spy();

            const result = sut.UnparkCar("TEST");

            should().exist(result);
        });
    });
});
