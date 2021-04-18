import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const getStoreInfo = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send(res.locals.store);
}

export default getStoreInfo;