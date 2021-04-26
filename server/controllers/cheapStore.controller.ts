import express, { Request, Response } from 'express';

import createCheapStore from '../src/cheapStore/endpoints/createCheapStore';

import getSingleTown from '../middleware/getSingleTown';
import getSingleStore from '../middleware/getSingleStore';

export default class CheapStoreController {
    public path = '/town/:townId/store/:storeId';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}/cheapStore`, getSingleTown, getSingleStore, this.createCheapStore);
    }

    createCheapStore(req: Request, res: Response) {
        createCheapStore(req, res);
    }

}