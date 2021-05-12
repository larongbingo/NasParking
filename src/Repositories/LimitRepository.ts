import { Limit } from "../Models/Limit";
import { LimitStore } from "../Store/LimitStore";

export class LimitRepository {
    private _limitStore: LimitStore;

    public constructor(limitStore: LimitStore) {
        this._limitStore = limitStore;
    }

    public GetLimitByKey(key: string): Limit | undefined {
        return this._limitStore.Limits[key];
    }

    public SetLimitByKey(key: string, Limit: Limit): void {
        this._limitStore.Limits[key] = Limit;
    }
}
