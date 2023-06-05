import { Request, Response } from "express";
import readUser from "../../services/user/read";
import { StatusCodes } from 'http-status-codes';


async function readUserControllerWithRelation(req: Request, res: Response) {
    const read = await readUser.readUserServiceWithRelation();
    return res.status(StatusCodes.OK).json(read);
}

async function readUserController(req: Request, res: Response) {
    const read = await readUser.readUserService();
    return res.status(StatusCodes.OK).json(read);
}
export default { readUserControllerWithRelation, readUserController };


