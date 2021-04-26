import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { News, Gallery } from '../../../interfaces/store.interface';

import validateNews from '../validation/validateNewNews';

import unlink from '../../../utils/unlink';

const addNews = async (req: Request, res: Response) => {
    // Check if file was provided
    if (!req.file) return res.status(StatusCodes.BAD_REQUEST).send('No data provided');
    // Get store object
    const store = res.locals.store;
    // Create news
    const photoTmp: Gallery = {
        path: req.file.path
    }
    const news: News = {
        ...req.body,
        photo: photoTmp
    }
    // Validate news
    const { error } = validateNews(news);
    if (error) {
        await unlink(req.file.path);
        return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);
    }
    // Save news
    store.news.push(news);
    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default addNews;