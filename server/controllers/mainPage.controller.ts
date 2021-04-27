import express, { Request, Response } from 'express';

import createMainPage from '../src/mainPage/endpoints/createMainPage';
import editMainPage from '../src/mainPage/endpoints/editMainPage';
import getMainPageData from '../src/mainPage/endpoints/getMainPage';
import addNews from '../src/mainPage/endpoints/addNews';
import removeNews from '../src/mainPage/endpoints/removeNews';
import editNews from '../src/mainPage/endpoints/editNews';

import getMainPage from '../middleware/getMainPage';

import uploadGallery from '../middleware/storeGalleryFiles';

export default class MainPageController {
    public path = '/mainPage';
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, this.createMainPage);
        this.router.put(`${this.path}/:mainPageId`, getMainPage, this.editMainPage);
        this.router.get(`${this.path}/:mainPageId`, getMainPage, this.getMainPageData);
        this.router.put(`${this.path}/:mainPageId/addNews`, getMainPage, uploadGallery.single('photo'), this.addNews);
        this.router.put(`${this.path}/:mainPageId/removeNews`, getMainPage, this.removeNews);
        this.router.put(`${this.path}/:mainPageId/editNews`, getMainPage, this.editNews);
    }

    createMainPage(req: Request, res: Response) {
        createMainPage(req, res);
    }
    editMainPage(req: Request, res: Response) {
        editMainPage(req, res);
    }
    getMainPageData(req: Request, res: Response) {
        getMainPageData(req, res);
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
}