import { Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

import storeModel from '../models/store.model';
import Store from '../interfaces/store.interface';

const getSingleStore = async (req: Request, res: Response, next: NextFunction) => {
    const store: Store | null = await storeModel.findById(req.params.storeId);
    if (!store) return res.status(StatusCodes.NOT_FOUND).send('Store not found');
    res.locals.store = store;
    next();
};

export default getSingleStore;
