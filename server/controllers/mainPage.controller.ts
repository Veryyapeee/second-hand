import express, { Request, Response } from 'express';

import createMainPage from '../src/mainPage/endpoints/createMainPage';
import editMainPage from '../src/mainPage/endpoints/editMainPage';
import getMainPageData from '../src/mainPage/endpoints/getMainPage';

import getMainPage from '../middleware/getMainPage';

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
}