import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Store from '../../../interfaces/store.interface';

import validateRemoveGallery from '../validation/validateRemoveGallery';

import unlink from '../../../utils/unlink';

const removeGallery = async (req: Request, res: Response) => {
    // Store object
    const store: Store | any = res.locals.store;

    // Validate body
    const { error } = validateRemoveGallery(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    store.gallery.forEach(async (pic: String, index: number) => {
        if (pic.toString() === req.body.picPath.toString()) {
            store.gallery.splice(index, 1);
            await unlink(pic);
        }
    })

    // Save data
    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default removeGallery;