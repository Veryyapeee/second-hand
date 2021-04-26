import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import cheapStoreModel from '../../../models/cheapStore.model';
import storeModel from '../../../models/store.model';

import { ShopInTown } from '../../../interfaces/town.interface';

const deleteStore = async (req: Request, res: Response) => {
    const store = res.locals.store;
    const town = res.locals.town;
    // Delete cheapStore
    await cheapStoreModel.findOneAndDelete({ storeId: store._id });

    // Remove store from town
    town.shops.forEach((shop: ShopInTown, index: number) => {
        if (shop.id.toString() === store._id.toString()) town.shops.splice(index, 1);
    })

    // Delete store
    await store.delete();
    // Save town
    await town.save();
    return res.status(StatusCodes.OK).send('Success!');
}

export default deleteStore;