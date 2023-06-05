import express from "express";
import createUser from "../controllers/user/create";
import readUser from "../controllers/user/read";
import findById from "../controllers/user/find";
import deleteUser from "../controllers/user/delete";
import updateUserController from "../controllers/user/update";

const routerUser = express.Router();

routerUser.post('/user', createUser);
routerUser.get('/user', readUser.readUserControllerWithRelation);
routerUser.get('/user/:id', findById);
routerUser.delete('/user/:id', deleteUser);
routerUser.put('/user/:id', updateUserController);

export default routerUser;