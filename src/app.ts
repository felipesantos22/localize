import express from "express";
import routerCar from "./router/router.car";

const app = express();

app.use(express.json());

app.use(routerCar);

export default app;