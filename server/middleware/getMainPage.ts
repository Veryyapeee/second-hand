import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import mainPageModel from '../models/mainPage.model';

const getMainPage = async (req: Request, res: Response, next: NextFunction) => {
    const mainPage = await mainPageModel.findById(req.params.mainPageId);
    if (!mainPage) return res.status(StatusCodes.NOT_FOUND).send('Main page not found');
    res.locals.mainPage = mainPage;
    next();
}

export default getMainPage;