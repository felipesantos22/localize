import express from "express";
import createUser from "../controllers/user/create";

const routerUser = express.Router();

routerUser.post('/user', createUser);

export default routerUser;