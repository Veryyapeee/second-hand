import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { News } from '../../../interfaces/store.interface';

import validateEditNews from '../validation/validateEditNews';

const editNews = async (req: Request, res: Response) => {
    const store = res.locals.store;

    // Validate body
    const { error } = validateEditNews(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Check if news exists
    if (!store.news.find((news: News) => news._id!.toString() === req.body.id.toString())) return res.status(StatusCodes.NOT_FOUND).send("News not found");

    // Update data
    store.news.forEach((news: News, index: number) => {
        if (news._id!.toString() === req.body.id.toString()) {
            store.news[index] = {
                ...req.body,
                photo: store.news[index].photo
            }
        }
    })

    // Save store
    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default editNews;