import express from "express";
import createCar from "../controllers/car/create";

const routerCar = express.Router();

routerCar.post('/car', createCar);

  export default routerCar;