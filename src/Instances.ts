import { CarParkLogRepository } from "./Repositories/CarParkLogRepository";
import { LimitRepository } from "./Repositories/LimitRepository";
import { SlotRepository } from "./Repositories/SlotRepository";
import { SlotsManager } from "./SlotsManager";
import { CarParkLogStore } from "./Store/CarParkLogStore";
import { LimitStore } from "./Store/LimitStore";
import { SlotStore } from "./Store/SlotStore";

export const slotStore = new SlotStore(Number(process.env.CAR_SLOTS));
export const slotRepository = new SlotRepository(slotStore);
export const slotsManager = new SlotsManager(slotRepository);

export const carParkLogStore = new CarParkLogStore();
export const carParkLogRepository = new CarParkLogRepository(carParkLogStore);

export const limitStore = new LimitStore();
export const limitRepository = new LimitRepository(limitStore);
