import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getTowns = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send(res.locals.towns);
}

export default getTowns;