import express from "express";
import createUser from "../controllers/user/create";
import readUserController from "../services/user/read";

const routerUser = express.Router();

routerUser.post('/user', createUser);
routerUser.get('/user', readUserController);

export default routerUser;