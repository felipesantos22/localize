import { Request, Response } from "express";
import updateUserService from "../../services/user/update";
import { StatusCodes } from "http-status-codes";


async function updateUserController(req: Request, res: Response) {
    const { id } = req.params;
    const { email, name } = req.body;
    const updateUser = await updateUserService(Number(id), email, name);
    return res.status(StatusCodes.OK).json(updateUser);
}

export default updateUserController;