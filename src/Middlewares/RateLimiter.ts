import { RequestHandler } from "express";
import { limitRepository } from "../Instances";
import { Limit } from "../Models/Limit";

const TOTAL_REQUESTS = 10;
const EXPIRES_IN = 1000 * 10;

// based on https://github.com/ded/express-limiter; cant write shit xd
// just removed redis specific stuff xd
export const RateLimiterMiddleware: RequestHandler = (req, res, next) => {
    try {
        const lookups = req.connection.remoteAddress;
        const key = "ratelimit:" + req.path + ":" + req.method.toLowerCase() + ":" + lookups;

        const now = Date.now();

        let limit = limitRepository.GetLimitByKey(key);
        limit = limit ?? new Limit(TOTAL_REQUESTS, TOTAL_REQUESTS, now + EXPIRES_IN);

        if(now > limit.Reset) {
            limit.Reset = now + EXPIRES_IN;
            limit.Remaining = TOTAL_REQUESTS;
        }

        limit.Remaining = Math.max(Number(limit.Remaining) - 1, -1);
        limitRepository.SetLimitByKey(key, limit);

        res.set("X-RateLimit-Limit", String(limit.Total));
        res.set("X-RateLimit-Reset", String(Math.ceil(limit.Reset / 1000)));
        res.set("X-RateLimit-Remaining", String(Math.max(limit.Remaining, 0)));

        if(limit.Remaining >= 0) return next();

        var after = (limit.Reset - Date.now()) / 1000;
        res.set("Retry-After", String(after));
        next({
            status: 403,
            message: "Maxed rate limit"
        });
    }
    catch(err) {
        next(err);
    }
};
