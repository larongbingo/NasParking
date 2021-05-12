import Express from "express";
import { Routes } from "./Routes";

export const App = Express();

App.use(Routes);

App.use((req, res) => {
    res.json({message: "Route does not exist"});
    res.status(404);
});
