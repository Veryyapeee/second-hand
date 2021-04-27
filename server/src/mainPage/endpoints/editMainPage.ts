import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import mainPageModel from '../../../models/mainPage.model';

import validateMainPage from '../validation/validateMainPage';

const editMainPage = async (req: Request, res: Response) => {
    // Validate data
    const { error } = validateMainPage(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Update mainPage
    const updatedMainPage = await mainPageModel.findByIdAndUpdate(
        req.params.mainPageId,
        { ...req.body },
        { new: true }
    );
    return res.status(StatusCodes.OK).send(updatedMainPage);
}

export default editMainPage;