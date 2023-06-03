import { Request, Response } from "express";
import userController from '../../services/user/create'
import { StatusCodes } from "http-status-codes";


async function createUser(request: Request, response: Response) { 
    try {
        const { email, name } = request.body;
        const createCar = await userController.createUser({ email, name });
        return response.status(StatusCodes.CREATED).json(createCar);
    } catch (error) {
        return response.status(StatusCodes.UNAUTHORIZED).json(error);
    }
}

export default createUser;