import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const getMainPageData = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).send(res.locals.mainPage);
}

export default getMainPageData;