import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import storeModel from '../../../models/store.model';
import { ShopInTown } from '../../../interfaces/town.interface';

import validateEditStore from '../validation/validateEditStore';

const changeStoreInformation = async (req: Request, res: Response) => {
    const town = res.locals.town;
    const store = res.locals.store;
    // Validate data
    const { error } = validateEditStore(req.body);
    if (error) return res.status(StatusCodes.BAD_REQUEST).send(error.details[0].message);

    // Check if new name is already taken
    for await (let store of town.shops) {
        if (store.name.toString() === req.body.name.toString()) return res.status(StatusCodes.BAD_REQUEST).send('Store already exists');
    }
    // Change store name in town object
    town.shops.forEach((shop: ShopInTown, index: number) => {
        if (store._id.toString() === shop.id.toString()) {
            town.shops[index].name = req.body.name;
        }
    })

    // Update object
    const updatedStore = await storeModel.findByIdAndUpdate(
        req.params.storeId,
        { ...req.body },
        { new: true }
    );
    // Save town
    await town.save();
    return res.status(StatusCodes.OK).send(updatedStore);
}

export default changeStoreInformation;