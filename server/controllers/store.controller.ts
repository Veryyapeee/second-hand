import express, { Request, Response } from 'express';

import createStore from '../src/store/endpoints/createStore';
import updateGallery from '../src/store/endpoints/gallery';
import removeGallery from '../src/store/endpoints/removeGallery';
import getStoreInfo from '../src/store/endpoints/getStore';
import changeStoreInformation from '../src/store/endpoints/changeStoreInformation';
import addNews from '../src/store/endpoints/addNews';
import removeNews from '../src/store/endpoints/removeNews';
import editNews from '../src/store/endpoints/editNews';

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
        this.router.put(`${this.path}/:storeId/gallery`, getSingleTown, getSingleStore, uploadGallery.array('gallery'), this.updateGallery);
        this.router.put(`${this.path}/:storeId/removeGallery`, getSingleTown, getSingleStore, this.removeGallery);
        this.router.put(`${this.path}/:storeId`, getSingleTown, getSingleStore, this.changeStoreInformation);
        this.router.put(`${this.path}/:storeId/addNews`, getSingleTown, getSingleStore, uploadGallery.single('photo'), this.addNews);
        this.router.put(`${this.path}/:storeId/removeNews`, getSingleTown, getSingleStore, this.removeNews);
        this.router.put(`${this.path}/:storeId/editNews/`, getSingleTown, getSingleStore, this.editNews);
        this.router.get(`${this.path}/:storeId`, getSingleTown, getSingleStore, this.getStoreInfo);
    }

    createStore(req: Request, res: Response) {
        createStore(req, res);
    }
    updateGallery(req: Request, res: Response) {
        updateGallery(req, res);
    }
    removeGallery(req: Request, res: Response) {
        removeGallery(req, res);
    }
    getStoreInfo(req: Request, res: Response) {
        getStoreInfo(req, res);
    }
    addNews(req: Request, res: Response) {
        addNews(req, res);
    }
    removeNews(req: Request, res: Response) {
        removeNews(req, res);
    }
    editNews(req: Request, res: Response) {
        editNews(req, res);
    }
    changeStoreInformation(req: Request, res: Response) {
        changeStoreInformation(req, res);
    }
}