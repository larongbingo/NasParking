
export class Limit {
    public constructor(total: number, remaining: number, reset: number) {
        this.Remaining = remaining;
        this.Total = total;
        this.Reset = reset;
    }

    public Total: number = 0;
    public Remaining: number = 0;
    public Reset: number = 0;
}
