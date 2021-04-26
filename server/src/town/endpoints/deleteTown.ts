import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import storeModel from '../../../models/store.model';
import cheapStoreModel from '../../../models/cheapStore.model';

import { ShopInTown, CV } from '../../../interfaces/town.interface';

import unlink from '../../../utils/unlink';

const deleteTown = async (req: Request, res: Response) => {
    const town = res.locals.town;

    // Remove every CV file
    town.cv.forEach(async (cv: CV) => {
        await unlink(cv.cv);
    })

    // Delete every store and cheapStore assigned to town
    town.shops.forEach(async (store: ShopInTown, index: number) => {
        await storeModel.findByIdAndDelete(store.id);
        await cheapStoreModel.findOneAndDelete({ storeId: store.id });
    });

    // Delete town
    await town.delete();
    return res.status(StatusCodes.OK).send('Success!');
}

export default deleteTown;