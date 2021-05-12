import { Car } from "./Models/Car";
import { SlotRepository } from "./Repositories/SlotRepository";
import { SlotsManager } from "./SlotsManager";
import { SlotStore } from "./Store/SlotStore";

const Store = new SlotStore(10);
const Repository = new SlotRepository(Store);
const Manager = new SlotsManager(Repository);
Manager.ParkCar("ASD123");

Manager.ParkCar("ASD123");

Manager.ParkCar("ASD123123");

console.log(Manager.UnparkCar("1"));
console.log(JSON.stringify(Store.Slots));

let test = Repository.FindSlotBySlotId("1");
test!.ParkedCar = new Car("ASDASD");
Repository.UpdateSlot(test!);

console.log(JSON.stringify(Store.Slots));
