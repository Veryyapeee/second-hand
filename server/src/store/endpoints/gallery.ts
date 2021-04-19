import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const uploadGallery = async (req: Request, res: Response) => {
    // Check if files were provided
    if (!req.files) return res.status(StatusCodes.BAD_REQUEST).send('No data provided');
    const store = res.locals.store;
    // Get files paths and save
    const files: any = req.files;
    files.forEach((file: Express.Multer.File) => {
        store.gallery.push(file.path);
    });

    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default uploadGallery;