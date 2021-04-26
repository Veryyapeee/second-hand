import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import mainPageModel from '../../../models/mainPage.model';

import validateMainPage from '../validation/validateMainPage';

const createMainPage = async (req: Request, res: Response) => {
    // Can only post mainPage once
    const mainPage = await mainPageModel.find();
    if (mainPage.length > 0) return res.status(StatusCodes.BAD_REQUEST).send('Main page already exists');

    // Validate Data
    const { error } = validateMainPage(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Save mainPage
    const mainPageData = new mainPageModel({ ...req.body });
    await mainPageData.save();
    return res.status(StatusCodes.OK).send(mainPageData);
}

export default createMainPage;