import { Car } from "./Models/Car";
import { SlotsManager } from "./SlotsManager";

const Manager = new SlotsManager(10);
Manager.ParkCar("ASD123");


console.log(JSON.stringify(Manager.Slots));
