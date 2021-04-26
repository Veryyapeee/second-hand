import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import Store, { Gallery } from '../../../interfaces/store.interface';

import validateRemoveGallery from '../validation/validateRemoveGallery';

import unlink from '../../../utils/unlink';

const removeGallery = async (req: Request, res: Response) => {
    // Store object
    const store: Store | any = res.locals.store;

    // Validate body
    const { error } = validateRemoveGallery(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    store.gallery.forEach(async (pic: Gallery, index: number) => {
        if (pic._id!.toString() === req.body.id.toString()) {
            store.gallery.splice(index, 1);
            await unlink(pic.path);
        }
    })

    // Save data
    await store.save();
    return res.status(StatusCodes.OK).send(store);
}

export default removeGallery;