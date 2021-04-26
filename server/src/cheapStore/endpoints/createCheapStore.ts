import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import cheapStoreModel from '../../../models/cheapStore.model';

import validateCheapStore from '../validation/validateCheapStore';

const createCheapStore = async (req: Request, res: Response) => {
    //Check if cheap store already exists
    const checkCheapStore = await cheapStoreModel.findOne({ storeId: req.params.storeId });
    if (checkCheapStore) return res.status(StatusCodes.BAD_REQUEST).send('Cheap store already exists');

    // Validate data
    const { error } = validateCheapStore({ storeId: req.params.storeId, ...req.body });
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Create cheapStore object
    const cheapStoreData = {
        storeId: req.params.storeId,
        ...req.body
    }

    // Create cheap store
    const newCheapStore = new cheapStoreModel(cheapStoreData);
    await newCheapStore.save();

    return res.status(StatusCodes.OK).send(newCheapStore);
}

export default createCheapStore;