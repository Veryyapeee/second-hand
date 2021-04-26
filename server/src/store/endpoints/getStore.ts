import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import cheapStoreModel from '../../../models/cheapStore.model';

const getStoreInfo = async (req: Request, res: Response) => {

    // Get cheap store if exists
    const cheapStore = await cheapStoreModel.findOne({ storeId: req.params.storeId });
    if (cheapStore) return res.status(StatusCodes.OK).send({ store: res.locals.store, cheapStore: cheapStore });

    return res.status(StatusCodes.OK).send({ store: res.locals.store });
}

export default getStoreInfo;