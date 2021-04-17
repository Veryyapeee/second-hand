import express, { Request, Response } from 'express';

import createNewTown from '../src/town/createTown';
import changeTownName from '../src/town/changeTownName';

import getAllTowns from '../middleware/getAllTowns';

export default class TownController {
    public path = `/town`;
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, getAllTowns, this.createTown);
        this.router.put(`${this.path}/:townId`, this.changeTownName);
    }

    createTown(req: Request, res: Response) {
        createNewTown(req, res);
    }

    changeTownName(req: Request, res: Response) {
        changeTownName(req, res);
    }
}