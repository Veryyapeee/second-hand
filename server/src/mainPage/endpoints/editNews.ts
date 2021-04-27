import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { News } from '../../../interfaces/store.interface';

import validateEditNews from '../../store/validation/validateEditNews';

const editNews = async (req: Request, res: Response) => {
    const mainPage = res.locals.mainPage;

    // Validate body
    const { error } = validateEditNews(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Check if news exists
    if (!mainPage.news.find((news: News) => news._id!.toString() === req.body.id.toString())) return res.status(StatusCodes.NOT_FOUND).send("News not found");

    // Update data
    mainPage.news.forEach((news: News, index: number) => {
        if (news._id!.toString() === req.body.id.toString()) {
            mainPage.news[index] = {
                ...req.body,
                photo: mainPage.news[index].photo
            }
        }
    })

    // Save store
    await mainPage.save();
    return res.status(StatusCodes.OK).send(mainPage);
}

export default editNews;