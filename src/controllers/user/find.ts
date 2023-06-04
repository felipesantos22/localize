import { Request, Response } from "express";
import findId from '../../services/user/find'
import { StatusCodes } from "http-status-codes";

async function findById(req: Request, res: Response) {
    const { id } = req.params;
    const find = await findId(Number(id));
    return res.status(StatusCodes.OK).json(find)
}

export default findById;