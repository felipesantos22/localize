import { Request, Response } from "express";
import carController from '../../services/car/create'
import { StatusCodes } from "http-status-codes";


async function createCar(request: Request, response: Response) {
    const { modelo, placa, ano, userId } = request.body;
    try {
        const createCar = await carController.createCar({ modelo, placa, ano, userId });
        return response.status(StatusCodes.CREATED).json(createCar);
    } catch (error) {
        return response.status(StatusCodes.UNAUTHORIZED).json({ message: "Registro não criado!" });
    }


}

export default createCar;