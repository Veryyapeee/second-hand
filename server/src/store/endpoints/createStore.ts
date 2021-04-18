import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import storeModel from '../../../models/store.model';
import Store from '../../../interfaces/store.interface';

import validateStore from '../validation/validateCreateStore';

const createStore = async (req: Request, res: Response) => {
    const town = res.locals.town;
    // Check if store exists
    for await (let shop of town.shops) {
        if (shop.name === req.body.name) return res.status(StatusCodes.BAD_REQUEST).send('Shop already exists');
    }
    // Create store object
    const storeData: Store = {
        ...req.body,
        address: {
            ...req.body.address,
            town: town.name
        }
    };

    // Validate data
    const { error } = validateStore(storeData);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Save new store
    const newStore = new storeModel(storeData);
    await newStore.save();

    // Push store to town object
    town.shops.push({ id: newStore._id, name: newStore.name });

    // Save town
    town.save();
    return res.status(StatusCodes.OK).send([town, newStore]);
}

export default createStore;