import express from "express";

const routerCar = express.Router();

routerCar.get('/', (_req, res) => {
    res.send('Hello World!')
  });

  export default routerCar;