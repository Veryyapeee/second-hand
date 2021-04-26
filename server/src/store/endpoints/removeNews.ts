import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { News } from '../../../interfaces/store.interface';

import unlink from '../../../utils/unlink';

import validateRemoveNews from '../validation/validateRemoveNews';

const removeNews = async (req: Request, res: Response) => {
    const store = res.locals.store;

    // Validate body
    const { error } = validateRemoveNews(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Splice store news array and unlink image
    store.news.forEach(async (news: News, index: number) => {
        if (news._id!.toString() === req.body.id.toString()) {
            store.news.splice(index, 1);
            await unlink(news.photo.path);
        }
    })

    // Save store
    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default removeNews;