import Express from "express";
import { Routes } from "./Routes";

export const App = Express();

App.use(Routes);
