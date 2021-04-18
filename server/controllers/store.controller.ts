import express, { Request, Response } from 'express';

import createStore from '../src/store/endpoints/createStore';
import updateGallery from '../src/store/endpoints/gallery';
import getStoreInfo from '../src/store/endpoints/getStore';

import getSingleTown from '../middleware/getSingleTown';
import getSingleStore from '../middleware/getSingleStore';

import uploadGallery from '../middleware/storeGalleryFiles';

export default class StoreController {
    public path = '/town/:townId/store';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, getSingleTown, this.createStore);
        this.router.put(`${this.path}/:storeId/gallery`, getSingleStore, uploadGallery.array('gallery'), this.updateGallery);
        this.router.get(`${this.path}/:storeId`, getSingleStore, this.getStoreInfo);
    }

    createStore(req: Request, res: Response) {
        createStore(req, res);
    }
    updateGallery(req: Request, res: Response) {
        updateGallery(req, res);
    }
    getStoreInfo(req: Request, res: Response) {
        getStoreInfo(req, res);
    }
}