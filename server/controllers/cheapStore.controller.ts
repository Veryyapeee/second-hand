import express, { Request, Response } from 'express';

import createCheapStore from '../src/cheapStore/endpoints/createCheapStore';
import editCheapStore from '../src/cheapStore/endpoints/editCheapStore';
import deleteCheapStore from '../src/cheapStore/endpoints/deleteCheapStore';

import getSingleTown from '../middleware/getSingleTown';
import getSingleStore from '../middleware/getSingleStore';
import getSingleCheapStore from '../middleware/getSingleCheapStore';

export default class CheapStoreController {
    public path = '/town/:townId/store/:storeId';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}/cheapStore`, getSingleTown, getSingleStore, this.createCheapStore);
        this.router.put(`${this.path}/cheapStore/:cheapStoreId`, getSingleTown, getSingleStore, getSingleCheapStore, this.editCheapStore);
        this.router.delete(`${this.path}/cheapStore/:cheapStoreId`, getSingleTown, getSingleStore, getSingleCheapStore, this.deleteCheapStore);
    }

    createCheapStore(req: Request, res: Response) {
        createCheapStore(req, res);
    }
    editCheapStore(req: Request, res: Response) {
        editCheapStore(req, res);
    }
    deleteCheapStore(req: Request, res: Response) {
        deleteCheapStore(req, res);
    }
}