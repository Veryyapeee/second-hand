import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

import cheapStoreModel from '../models/cheapStore.model';
import CheapStore from '../interfaces/cheapStore.interface';

const getSingleCheapStore = async (req: Request, res: Response, next: NextFunction) => {
    const cheapStore: CheapStore | null = await cheapStoreModel.findById(req.params.cheapStoreId);
    if (!cheapStore) return res.status(StatusCodes.NOT_FOUND).send('Cheap store not found');
    res.locals.cheapStore = cheapStore;
    next();
}

export default getSingleCheapStore;