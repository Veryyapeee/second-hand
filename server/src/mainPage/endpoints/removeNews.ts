import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { News } from '../../../interfaces/store.interface';

import unlink from '../../../utils/unlink';

import validateRemoveNews from '../../store/validation/validateRemoveNews';

const removeNews = async (req: Request, res: Response) => {
    const mainPage = res.locals.mainPage;

    // Validate body
    const { error } = validateRemoveNews(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Splice store news array and unlink image
    mainPage.news.forEach(async (news: News, index: number) => {
        if (news._id!.toString() === req.body.id.toString()) {
            mainPage.news.splice(index, 1);
            await unlink(news.photo.path);
        }
    })

    // Save store
    await mainPage.save();
    return res.status(StatusCodes.OK).send(mainPage);
}

export default removeNews;