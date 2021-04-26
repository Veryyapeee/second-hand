import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import cheapStoreModel from '../../../models/cheapStore.model';

const deleteCheapStore = async (req: Request, res: Response) => {
    // Delete cheapStore
    await cheapStoreModel.findByIdAndDelete(req.params.cheapStoreId);
    return res.status(StatusCodes.OK).send('Success');
}

export default deleteCheapStore;