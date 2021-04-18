import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getTownInfo = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send(res.locals.town);
}

export default getTownInfo;