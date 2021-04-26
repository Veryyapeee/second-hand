import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'

import cheapStoreModel from '../../../models/cheapStore.model';
import validateCheapStore from '../validation/validateCheapStore';

const editCheapStore = async (req: Request, res: Response) => {
    // Get cheap store by ID
    const cheapStore = res.locals.cheapStore;

    // Validate data
    const { error } = validateCheapStore({ storeId: cheapStore.storeId, ...req.body });
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Save edited
    const cheapStoreEdited = await cheapStoreModel.findByIdAndUpdate(
        req.params.cheapStoreId,
        {
            storeId: cheapStore.storeId,
            ...req.body
        },
        { new: true }
    );
    return res.status(StatusCodes.OK).send(cheapStoreEdited);
}

export default editCheapStore;