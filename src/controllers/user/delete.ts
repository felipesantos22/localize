import { Request, Response } from "express";
import deleteUserService from "../../services/user/delete";
import { StatusCodes } from "http-status-codes";


async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await deleteUserService(Number(id));
    return res.status(StatusCodes.OK).json({ message: "Item deletedado!" })
}

export default deleteUser;