import { Request, Response } from "express";
import readUserService from "../../controllers/user/read";
import { StatusCodes } from 'http-status-codes';


async function readUserController(req: Request, res: Response) {
    const read = await readUserService();
    return res.status(StatusCodes.OK).json(read);
}

export default readUserController;
