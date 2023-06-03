import express from "express";
import routerCar from "./router/router.car";
import routerUser from "./router/router.user";

const app = express();

app.use(express.json());

app.use(routerCar);
app.use(routerUser);

export default app;