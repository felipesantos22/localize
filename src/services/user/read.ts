import { Request, Response } from "express";
import readUser from "../../controllers/user/read";
import { StatusCodes } from 'http-status-codes';


async function readUserControllerWithRelatio(req: Request, res: Response) {
    const read = await readUser.readUserServiceWithRelation();
    return res.status(StatusCodes.OK).json(read);
}

async function readUserController(req: Request, res: Response) {
    const read = await readUser.readUserService();
    return res.status(StatusCodes.OK).json(read);
}
export default { readUserControllerWithRelatio, readUserController };
