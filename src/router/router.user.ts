import express from "express";
import createUser from "../controllers/user/create";
import readUserController from "../services/user/read";
import findById from "../controllers/user/find";

const routerUser = express.Router();

routerUser.post('/user', createUser);
routerUser.get('/user', readUserController.readUserController);
routerUser.get('/user/:id', findById);

export default routerUser;